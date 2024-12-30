import { useEffect } from 'react';
import { swipeBehavior } from '@telegram-apps/sdk';

const SwipeHandler = () => {
  useEffect(() => {
    // Проверяем поддержку
    if (swipeBehavior.isSupported()) {
      // Монтируем компонент
      swipeBehavior.mount();

      // Отключаем вертикальные свайпы, чтобы избежать закрытия приложения
      if (swipeBehavior.disableVertical.isAvailable()) {
        swipeBehavior.disableVertical();
        console.log('Vertical swipe disabled');
      }

      // При размонтировании очищаем настройки
      return () => {
        swipeBehavior.unmount();
        console.log('Swipe behavior unmounted');
      };
    } else {
      console.log('Swipe behavior is not supported');
    }
  }, []);

  return null; // Компонент не отображает UI
};

export default SwipeHandler;
