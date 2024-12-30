import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CardList from './components/CardList';
import NavBar from './components/NavBar';
import Vremeno from './components/vremeno';

function App() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;

      // Сообщаем Telegram, что приложение готово
      webApp.ready();

      // Разворачиваем WebView на полный экран
      webApp.expand();

      // Отключаем автоматическое сворачивание при скролле
      document.body.style.overflow = 'hidden';
    }
  }, []);

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<CardList />} />
          <Route path='/page2' element={<Vremeno />} />
          <Route path='/page3' element={<Vremeno />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
