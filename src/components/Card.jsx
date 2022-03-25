import React from "react";

function Card(props) {
  return (
    <div className="card-container">
      <h2>{props.name}</h2>
      <img src={props.img} alt="a pic of the projects" />
      <p>{props.desc}</p>
    </div>
  );
}

export default Card;
