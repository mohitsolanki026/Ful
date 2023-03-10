import React, { useState } from 'react';
import './card.css'; // import CSS file for styling


function ImageComponent({ title, description, imageUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="image-component"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`content ${isHovered ? 'hovered' : ''}`}>
        <img className="image" src={imageUrl} alt={title} />
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export default ImageComponent;
