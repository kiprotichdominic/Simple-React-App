import React from "react";
import "./App.css";
import "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/v1/car/").then((response) =>
      response.json().then((carslist) => this.setState({ cars: carslist }))
    );
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { cars, searchField } = this.state;
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Car Listing</h1>
        <SearchBox placeholder='Search Cars' handleChange={this.handleChange} />
        <CardList cars={filteredCars} />
      </div>
    );
  }
}
export default App;
