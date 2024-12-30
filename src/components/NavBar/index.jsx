import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import svg from '../../UI/icons/test.svg';

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar__button'>
        <img src={svg} alt='CardList' className='navbar__icon' />
      </Link>
      <Link to='/page2' className='navbar__button'>
        <img src={svg} alt='Page 2' className='navbar__icon' />
      </Link>
      <Link to='/page3' className='navbar__button'>
        <img src={svg} alt='Page 3' className='navbar__icon' />
      </Link>
    </div>
  );
};

export default NavBar;
