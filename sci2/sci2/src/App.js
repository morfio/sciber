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
import Board from './Board';
import Board2 from './Board2';
import PageCardList from './PageCardList';
import show from './show';
import {Lesson} from './Facilitator';
import {Curriculum} from './Facilitator';
import {Public} from './Facilitator';
import {FacHeader} from './Facilitator';
import Disclaimer from './Disclaimer';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class App extends Component {
  
 /*addd all routes hers and call them from respective pages wit link
 <Route path="/Standard/:topic/" render={(props) => <Page vidsource ={vidsource} />} />*/ 

  render() {
    return (
      <div className="App">
        <header className=''>
          <Router>
            <div>
              <Navigation />
              <Route exact path="/" component={Home} />
              <Route exact path="/Standard" component={Standard} />
              <Route  path="/Standard/:dpd/:section" component={Board} />
                <Route  path="/Standard/:topic" component={Page} /> 
              <Route exact path="/Advanced" component={Advanced} />
              <Route path="/Advanced/:topic/:section" component={Board2} />
              <Route  path="/Advanced/:topic" component={Page} />
              <Route  path="/Facilitator" component={FacHeader} />
                <Route exact path="/Facilitator/Public" component={Public} />
                <Route  path="/Facilitator/Lesson" component={Lesson} />
                <Route  path="/Facilitator/Curriculum" component={Curriculum} />

              <Route  path="/About" component={About} />
              <Route  path="/HcardLinks" component={HcardLinks} />
              <Route path="/Disclaimer" component={Disclaimer} />
              <Footer className='Footer'/>
            </div>

          </Router>
          
        </header>
        
        
      </div>
    );
  }
}

export default App;
