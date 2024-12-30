import React from 'react';
import Card from '../Card';
import './CardList.css';

const cardsData = [
  {
    heading: 'Мастера приёмщики',
    items: [
      'Принято сегодня 15',
      'Принято всего 132',
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
    items: ['Принято сегодня 5', 'Принято всего 125'],
  },
  {
    heading: 'Мастера цеха',
    items: ['Принято сегодня 14', 'Принято всего 222'],
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
