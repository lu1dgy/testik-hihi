import React from 'react';
import Card from '../Card';
import './CardList.css';

const cardsData = [
  {
    heading: 'Мастера приёмщики',
    items: [
      'Принято сегодня',
      'Принято всего',
      'Сергей',
      'Сергей',
      'Сергей',
      'Сергей',
      'Сергей',
      'Сергей',
      'Сергей',
      'Сергей',
      'Сергей',
      'Сергей',
      'Сергей',
    ],
  },
  {
    heading: 'Исполнители',
    items: ['Принято сегодня', 'Принято всего'],
  },
  {
    heading: 'Мастера цеха',
    items: ['Принято сегодня', 'Принято всего'],
  },
];

const CardList = () => {
  return (
    <ul className='cardList'>
      {cardsData.map((card, index) => (
        <Card key={index} heading={card.heading} items={card.items} />
      ))}
    </ul>
  );
};

export default CardList;
