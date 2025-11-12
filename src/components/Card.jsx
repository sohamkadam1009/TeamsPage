import React from "react";
import "./card.css";

const Card = ({ frontImage, name, title, isMainMember }) => {
  return (
    <div
      className="card_container"
      style={{
        maxWidth: isMainMember ? "350px" : "320px",
      }}
    >
      {/* Image Section */}
      <div className="image_box">
        <img src={frontImage} alt={name} />
      </div>

      {/* Text Section */}
      <div className="text_box">
        <h4 className="name">{name}</h4>
      </div>

      {/* Title Section */}
      <div className="title_box">
        <h4 className="title">{title}</h4>
      </div>
    </div>
  );
};

export default Card;
