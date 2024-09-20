import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/common/heading/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Title from './components/common/title/Title';
import CourseHome from './components/allcourses/CourseHome';
import Price from './components/pricing/Price';
import Contact from './components/contact/Contact';
import LoginPage from './components/login/LoginPage'; 
import PaymentPage from './components/payment/Payment';


function App() {
  return (
    <Router>
      <Header />
      <Title />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<CourseHome />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/payment" element={<PaymentPage />} />


      </Routes>
    </Router>
  );
}

export default App;