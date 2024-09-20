import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './payment.css';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState(0);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      console.log('Payment submitted!');
      setTimeout(() => {
        setLoading(false);
        console.log('Payment processed!');
  
        history.push('/course');
      }, 2000);
    } else {
      console.log('Please fix the errors before submitting.');
    }
  };

  const handleCardNumberChange = (event) => {
    const value = event.target.value.replace(/\D+/g, '');
    if (value.length > 16) {
      setErrors((prev) => ({ ...prev, cardNumber: 'Card number should not exceed 16 digits' }));
    } else {
      setCardNumber(value);
      setErrors((prev) => ({ ...prev, cardNumber: '' }));
    }
  };

  const handleCvvChange = (event) => {
    const value = event.target.value.replace(/\D+/g, '');
    if (value.length !== 3) {
      setErrors((prev) => ({ ...prev, cvv: 'CVV should be 3 digits' }));
    } else {
      setCvv(value);
      setErrors((prev) => ({ ...prev, cvv: '' }));
    }
  };

  const handleExpirationDateChange = (event) => {
    let value = event.target.value.replace(/\D+/g, '');
    if (value.length > 4) {
      value = value.slice(0, 4); 
    }

    if (value.length === 4) {
      const month = parseInt(value.slice(0, 2), 10);
      const year = parseInt(value.slice(2), 10);

      if (month < 1 || month > 12 || year < new Date().getFullYear() % 100) {
        setErrors((prev) => ({ ...prev, expirationDate: 'Invalid expiration date' }));
      } else {
        setExpirationDate(`${value.slice(0, 2)}/${value.slice(2)}`);
        setErrors((prev) => ({ ...prev, expirationDate: '' }));
      }
    } else {
      setExpirationDate(value);
      setErrors((prev) => ({ ...prev, expirationDate: 'Invalid expiration date format' }));
    }
  };

  return (
    <div className="payment-page">
      <h1>Payment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
            maxLength={12} 
          />
          {errors.cardNumber && <div style={{ color: 'red' }}>{errors.cardNumber}</div>}
        </label>
        <label>
          Expiration Date:
          <input
            type="text"
            value={expirationDate}
            onChange={handleExpirationDateChange}
            placeholder="MMYY"
          />
          {errors.expirationDate && <div style={{ color: 'red' }}>{errors.expirationDate}</div>}
        </label>
        <label>
          CVV:
          <input
            type="text"
            defaultValue=""
            onChange={handleCvvChange}
            placeholder="123"
            maxLength={3} 
          />
       
          {errors.cvv && <div style={{ color: 'red' }}>{errors.cvv}</div>}
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Pay'}
        </button>
      </form>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Payment;