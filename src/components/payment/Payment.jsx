import React, { useState } from 'react';
import './payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cardNumber || !expiryDate || !cvc) {
      setError('Please fill in all fields.');
      return;
    }

    console.log('Payment Details:');
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVC:', cvc);
    alert('Payment details submitted!');
    navigate('/course'); 

    setCardNumber('');
    setExpiryDate('');
    setCvc('');
    setError('');
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvc">CVC</label>
          <input
            type="text"
            id="cvc"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-btn">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
