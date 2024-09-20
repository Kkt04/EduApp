import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginSignup = () => {
  const initialData = {
    name: "",
    email: "",
    password: ""
  };

  const [inputData, setInputData] = useState(initialData);
  const [userData, setUserData] = useState(null);
  const [msg, setMsg] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const storeUserData = (email, password) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  };

  const retrieveUserData = () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    return { email: storedEmail, password: storedPassword };
  };

  const handleInput = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    if (isLogin) {
      const storedUserData = retrieveUserData();
      if (!inputData.email || !inputData.password) {
        alert("Both Email and Password are Mandatory!");
      } else if (storedUserData && inputData.email === storedUserData.email && inputData.password === storedUserData.password) {
        setMsg(true);
        setTimeout(() => {
          setMsg(false);
          navigate('/');
        }, 2000);
      } else {
        alert("Invalid credentials, please try again!");
      }
    } else {
      if (!inputData.name || !inputData.email || !inputData.password) {
        alert("All Fields are Mandatory!");
      } else {
        storeUserData(inputData.email, inputData.password);
        setUserData({
          name: inputData.name,
          email: inputData.email,
          password: inputData.password
        });
        setMsg(true);
        setTimeout(() => {
          setMsg(false);
        }, 2000);
      }
    }
    setInputData(initialData);
  };

  return (
    <div className='container'>
      <div className='form-toggle'>
        <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
        <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Signup</button>
      </div>
      
      <form onSubmit={submit} className='form'>
        <h2>{msg ? (isLogin ? "Login Successfully!" : inputData.name + " : SignUp Successfully!") : null}</h2>
        
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        
        <div className='inputs'>
          {!isLogin && (
            <input 
              type='text' 
              placeholder='Name' 
              name="name" 
              value={inputData.name} 
              onChange={handleInput} 
            />
          )}
          <input 
            type='email' 
            placeholder='Email' 
            name="email" 
            value={inputData.email} 
            onChange={handleInput} 
          />
          <input 
            type='password' 
            placeholder='Password' 
            name="password" 
            value={inputData.password} 
            onChange={handleInput} 
          />
        </div>

        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
    </div>
  );
};

export default LoginSignup;