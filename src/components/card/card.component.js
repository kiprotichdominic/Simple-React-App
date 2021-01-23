import { React } from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className='card-container'>
    <img src={props.car.images} alt={props.car.name} />
    <h1>{props.car.name}</h1>
    <p>Ksh. {props.car.price}</p>
  </div>
);
