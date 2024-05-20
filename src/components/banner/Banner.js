import React from "react";
import "./Banner.css";

function Banner(props) {

  return (

    <div className={`content ${props.class}`}>
      <div className="Banner-title">{props.title}</div>
      <div className="description">
        <p>{props.desc}</p>
      </div>
      <button className="btn-explore">{props.btn}</button>

    </div>
  );
}

export default Banner;
