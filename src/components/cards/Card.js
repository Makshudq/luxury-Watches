import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-container padding">
      <p className="titleNumber">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
}

export default Card;
