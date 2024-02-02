// Card.jsx
import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={`card ${props.extendedClass}`}>
      <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{props.title}</h5>
        <p className="card-text">
         {props.para}
        </p>
        <Link to={props.link} className="btn btn-primary">
         Click to visit
        </Link>
      </div>
    </div>
  );
};

export default Card;
