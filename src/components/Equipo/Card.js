import React from "react";
import PropTypes from "prop-types";

import "./Equipo.css";

function Card({ imageSource, title, text }) {
  return (
    <div className="card text-center  mb-3 animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary"> {text}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageSource: PropTypes.string
};

export default Card;
