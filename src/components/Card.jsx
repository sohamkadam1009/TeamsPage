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
      <div
        className="text_box"
        style={{
          margin: isMainMember ? "0 20px -20px 20px" : "0 60px -20px 60px",
          fontSize: isMainMember ? "1.5em" : "1.2rem",
          padding: isMainMember ? "15px 10px" : "6px 2px",
        }}
      >
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
