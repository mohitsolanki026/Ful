import React from 'react';
import "./RewCard.css"

const RewCard = ({ image, name, companyName, message }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-details">
        <h4 className="card-name">{name}</h4>
        <h5 className="card-company-name">{companyName}</h5>
        <p className="card-message">{message}</p>
      </div>
    </div>
  );
};

export default RewCard;
