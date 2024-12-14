import React from 'react';
import { Link } from 'react-router-dom';

export const Card = (props) => {
  return (
    <div className="card">
      <Link to={`/${props.category}/${props.id}`}> 
        <img
          src={props.img}
          alt={props.name} 
        />
      </Link>
      <Link to={`/${props.category}/${props.id}`}> 
        <h3 className="pname">{props.name}</h3>
      </Link>
      <div className="pricing">
        <h2><strike>Rs.{props.mrp}</strike></h2>
        <h3>Rs.{props.sp}</h3>
      </div>
    </div>
  );
};
