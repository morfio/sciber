import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './Home';
//import CardList from './CardList';
import {CoursesStan} from './CoursesStan';
import Quiz from './Quiz';

ReactDOM.render(<Quiz />, document.getElementById('root'));
registerServiceWorker();
