import React, { useState } from 'react';
import Head from './Head';
import './header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log('Login button clicked!');
    navigate('/login');
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
            <li><Link to='/pricing'>Pricing</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            
          </ul>
          <div className='start'>
           <div className='button' onClick={handleLogin}>LOGIN</div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
