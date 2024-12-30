import React from 'react';
import Card from '../Card';

const cardsData = [
  {
    heading: 'Мастера приёмщики',
    items: ['Elem', 'Elem'],
  },
  {
    heading: 'Сотрудники сервиса',
    items: ['Employee1', 'Employee2', 'Employee3'],
  },
];

const CardList = () => {
  return (
    <ul>
      {cardsData.map((card, index) => (
        <Card key={index} heading={card.heading} items={card.items} />
      ))}
    </ul>
  );
};

export default CardList;
