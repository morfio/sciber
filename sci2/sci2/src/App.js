import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Standard from './Standard';
import Advanced from './Advanced';
//import New from './New';
import Page from './Page';
import Home from './Home';
//import Advanced from './Advanced';
import Facilitator from  './Facilitator';
import About from './About';
//import ScrollBox from './ScrollBox';
//import MsgBoard from './MsgBoard';
import CardList from './CardList';
import Footer from './Footer';
import { CoursesStan } from './CoursesStan';
import HcardLinks from './HcardLinks';
import Test from './test1';


import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class App extends Component {
  
 /*addd all routes hers and call them from respective pages wit link*/ 

  render() {
    return (
      <div className="App">
        <header className='header'>
          <Router>
            <div>
              <Navigation />
              <Route exact path="/" component={Home} />
              <Route exact path="/Standard" component={Standard} />
                <Route  path="/Standard/:topic" component={Page} />
                  <Route path="/Standard/:topic/:section" component={Page} />
              <Route  path="/Advanced" component={Advanced} />
                <Route  path="/Advanced/:topic" component={Page} />
              <Route  path="/Facilitator" component={Facilitator} />
              <Route  path="/About" component={About} />
              <Route  path="/HcardLinks" component={HcardLinks} />
            </div>
          </Router>
          
        </header>
        
        <Footer className='Footer'/>
      </div>
    );
  }
}

export default App;
