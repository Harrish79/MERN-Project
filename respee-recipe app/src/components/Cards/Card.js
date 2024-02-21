import React from "react";
import "../Cards/Card.css"
function Card(props) {
  return (
    <div className="res-card">
      <div className="res-card-body">
        <img src={props.img} className="res-card-image" alt="" />
        <h2 className="res-card-title">{props.title}</h2>
      </div>
      <button className="res-card-btn">View Recipe</button>
    </div>
  );
}

export default Card;
