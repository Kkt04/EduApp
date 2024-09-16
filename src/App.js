import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/common/heading/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import NotFound from './components/not-found/NotFound'; 
import Title from './components/common/title/Title';


function App() {
  return (
    <>
      <Router>
        <div> 
          <Header />
          <Switch>
            <Route  path="/" exact component={Home} />
            <Route  path="/about" exact component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;