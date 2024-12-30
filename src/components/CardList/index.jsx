import React from 'react';
import Card from '../Card';
import './CardList.css';

const cardsData = [
  {
    heading: 'Мастера приёмщики',
    items: [
      'Принято сегодня',
      'Принято всего',
      'Принято всего',
      'Принято всего',
      'Принято всего',
      'Принято всего',
      'Принято всего',
      'Принято всего',
      'Принято всего',
      'Принято всего',
      'Принято всего',
      'Принято всего',
      'Принято всего',
    ],
  },
  {
    heading: 'Сотрудники сервиса',
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
