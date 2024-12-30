import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CardList from './components/CardList';
import NavBar from './components/NavBar';
import vremeno from './components/vremeno';

function App() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      webApp.expand(); // Развернуть приложение
      document.body.style.minHeight = `${webApp.viewportHeight}px`;
    }
  }, []);

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<CardList />} />
          <Route path='/page2' element={<vremeno />} />
          <Route path='/page3' element={<vremeno />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
