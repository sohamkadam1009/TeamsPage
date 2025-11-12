import React from "react";
import "./card.css";

const Card = ({ frontImage, name, title }) => {
  return (
    <div className="card_container">
      <div className="image_box">
        <img src={frontImage} alt={name} />
      </div>
      <div className="text_box">
        <h3 className="name">{name}</h3>
      </div>
      <div className="title_box">
        <h4 className="title">{title}</h4>
      </div>
    </div>
  );
};

export default Card;
