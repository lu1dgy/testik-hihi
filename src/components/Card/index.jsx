// import React, { useState } from 'react';
// import './Card.css';

// const Card = ({ heading, items }) => {
//   const [showFullList, setShowFullList] = useState(false);

//   // Функция для переключения состояния
//   const toggleList = () => {
//     setShowFullList((prev) => !prev);
//   };

//   return (
//     <div className='card'>
//       <div className='card__item'>
//         <h2 className='card__heading'>{heading}</h2>
//         <div className='list'>
//           {items
//             .slice(0, showFullList ? items.length : 2) // Показываем все элементы или только первые два
//             .map((item, index) => (
//               <div key={index} className='list__item'>
//                 <span className='list__smile'>✅</span>
//                 {item}
//               </div>
//             ))}
//         </div>
//       </div>
//       <button className='list__button' onClick={toggleList}>
//         {showFullList ? 'Скрыть' : 'Развернуть'}
//       </button>
//     </div>
//   );
// };

// export default Card;
// import React, { useState } from 'react';
// import './Card.css';

// const Card = ({ heading, items }) => {
//   const [showFullList, setShowFullList] = useState(false);

//   const toggleList = () => {
//     setShowFullList((prev) => !prev);
//   };

//   return (
//     <div className='card'>
//       <div className='card__item'>
//         <h2 className='card__heading'>{heading}</h2>
//         <div className={`list ${showFullList ? 'list--expanded' : ''}`}>
//           {items
//             .slice(0, showFullList ? items.length : 2) // Показываем 2 элемента в свернутом состоянии
//             .map((item, index) => (
//               <div key={index} className='list__item'>
//                 <span className='list__smile'>✅</span>
//                 {item}
//               </div>
//             ))}
//         </div>
//         <button className='list__button' onClick={toggleList}>
//           {showFullList ? 'Скрыть' : 'Развернуть'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;
import React, { useState } from 'react';
import './Card.css';

const Card = ({ heading, items }) => {
  const [showFullList, setShowFullList] = useState(false);

  const toggleList = () => {
    setShowFullList((prev) => !prev);
  };

  return (
    <div className='card'>
      <div className='card__item'>
        <h2 className='card__heading'>{heading}</h2>
        {/* Список: добавляем классы для управления высотой */}
        <div className={`list ${showFullList ? 'list--expanded' : 'list--collapsed'}`}>
          {items.map((item, index) => (
            <div key={index} className='list__item'>
              <span className='list__smile'>✅</span>
              {item}
            </div>
          ))}
        </div>
        {/* Кнопка для раскрытия/свертывания */}
        <button className='list__button' onClick={toggleList}>
          {showFullList ? 'Скрыть' : 'Развернуть'}
        </button>
      </div>
    </div>
  );
};

export default Card;
