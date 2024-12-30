import { useEffect } from 'react';
import { swipeBehavior } from '@telegram-apps/sdk';

const SwipeHandler = () => {
  useEffect(() => {
    // Проверяем поддержку
    if (swipeBehavior.isSupported()) {
      // Монтируем компонент
      swipeBehavior.mount();

      // Включаем вертикальные свайпы
      if (swipeBehavior.enableVertical.isAvailable()) {
        swipeBehavior.enableVertical();
        console.log('Vertical swipe enabled');
      }

      // Вызывается при размонтировании
      return () => {
        swipeBehavior.unmount();
        console.log('Swipe behavior unmounted');
      };
    } else {
      console.log('Swipe behavior is not supported');
    }
  }, []);

  return null; // Компонент не рендерит ничего визуального
};

export default SwipeHandler;
