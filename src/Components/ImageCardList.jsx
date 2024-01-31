import React from 'react';
import './ImageCardList.css';

const ImageCardList = ({ items }) => {
  return (
    <div className="card-container">
      {items.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.image} alt={`Card ${index}`} className="card-image" />
          <div className="card-text">
            <p className="date">{item.date}</p>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCardList;