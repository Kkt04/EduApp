import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/common/heading/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Title from './components/common/title/Title';
import CourseHome from './components/allcourses/CourseHome';



function App() {
  return (
    <>
      <Router>
        <div> 
          <Header />
          <Title />
          <Switch>
            <Route  path="/" exact component={Home} />
            <Route  path="/about" exact component={About} />
            <Route path="/course" component={CourseHome} /> 
                
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;