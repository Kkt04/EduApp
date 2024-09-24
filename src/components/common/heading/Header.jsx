import React, { useState, useEffect } from 'react';
import Head from './Head';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  const storedUser = localStorage.getItem('email');
  useEffect(() => {
    if (storedUser) {
      setIsLoggedIn(true); 
    }
  }, [storedUser]);

  const handleLogin = () => {
    if (isLoggedIn) {
      localStorage.clear();
      setIsLoggedIn(false);
      alert("You have been logged out!"); 
      navigate('/'); 
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? 'mobile-nav' : 'flexSB'} onClick={() => setClick(false)}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/course'>All Courses</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/pricing'>FAQ</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
          <div className='start'>
            <div className={`button ${isLoggedIn ? 'logout-button' : ''}`} onClick={handleLogin}>
              {isLoggedIn ? 'LOGOUT' : 'LOGIN'}
            </div>
          <button className='toggle' onClick={() => setClick(!click)}>
              {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

