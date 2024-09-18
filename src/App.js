import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/common/heading/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Title from './components/common/title/Title';
import CourseHome from './components/allcourses/CourseHome';
import Price from './components/pricing/Price';
import Contact from './components/contact/Contact';


function App() {
  return (
    <>
      <Router>
        <div> 
          <Header />
          <Title />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/course" exact element={<CourseHome />} />
            <Route path="/pricing" exact element={<Price />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
  
        </div>
      </Router>
    </>
  );
}

export default App;
