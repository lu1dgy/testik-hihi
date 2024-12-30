import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import personSvg from '../../UI/icons/person.svg';
import clock from '../../UI/icons/clock.svg';
import statistics from '../../UI/icons/statistics.svg';

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar__button'>
        <img src={personSvg} alt='CardList' className='navbar__icon' />
      </Link>
      <Link to='/page2' className='navbar__button'>
        <img src={statistics} alt='Page 2' className='navbar__icon' />
      </Link>
      <Link to='/page3' className='navbar__button'>
        <img src={clock} alt='Page 3' className='navbar__icon' />
      </Link>
    </div>
  );
};

export default NavBar;
