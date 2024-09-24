import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/common/heading/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Title from './components/common/title/Title';
import CourseHome from './components/allcourses/CourseHome';
import Faqs from './components/pricing/Faqs';
import Contact from './components/contact/Contact';
import LoginPage from './components/login/LoginPage'; 
import VideosCard from './components/videos/VideosCard';



function App() {
  return (
    <Router>
      <Header />
      <Title />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<CourseHome />} />
        <Route path="/pricing" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/videos" element={<VideosCard />} />



      </Routes>
    </Router>
  );
}

export default App;