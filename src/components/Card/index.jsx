import React from 'react';

import './Card.css';

const Card = ({ heading, items }) => {
  return (
    <div className='card'>
      <div className='card__item'>
        <h2 className='card__heading'>{heading}</h2>
        <div className='divst'>
          {items.map((item, index) => (
            <div key={index} className='divst__item'>
              <span className='divst__smile'>✅</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
