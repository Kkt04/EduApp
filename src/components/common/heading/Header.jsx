import React, { useState, useEffect } from 'react';
import Head from './Head';
import './header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('email');
    if (storedUser) {
      setIsLoggedIn(true); 
    }
  }, []);

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
            <div className='button' onClick={handleLogin}>
              {isLoggedIn ? 'LOGOUT' : 'LOGIN'} 
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
