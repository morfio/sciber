import React, {Component} from 'react';
//import Navigation from './Navigation';
//import Footer from './Footer';
import ScrollBox from './ScrollBox';
import CardList from './CardList';
import {CoursesStan} from './CoursesStan';
import './Home.css';
import science from './images/scientistt.png';
import Stem from './images/stemCells_off.gif'
import back from './images/advancedBG.jpg';
//import brain from '.images/Brain_Chemistry_off.gif';
import genes from './images/Genetic_Engineering_off.gif';
import vaccine from './images/Vaccinations_off.gif';
import evo from './images/Evolution_off.gif';
//import clinic from '/images/ClinicalTrials_off.gif';
import Button from './Button';


class Home extends Component {
	constructor(props){
	  super(props);	
	  this.state = {
	  	image : {}
	  }
	}  
	
  render() 
	{
		return(
		<div className='container'>
			<div className='scrollB content'>
					<div className='sText'>
						<article>
							<h2>Welcome to SciberBrain</h2>
							<p>SciberBrain is a collection of resources to stimulate group
							 discussions about controversial aspects of science. Choose the level and topic
						    (below) for your group and away you go.</p>
						    <Button/>
						</article>
		            </div>
					<div className='sImage'>
					  <img  src={science} />
					</div>
			</div>
			
			<div className='headLinks content'>
				<div className='headLeft'>
					<div className='hLeftBoard'>
						<em><h3 className='tHeadL'>Standard Level</h3></em>
						<em><p className='tBotL'>Suitable for schools and lay <br/>audiences.</p></em>
				    </div>
					<div className='hLeftLinker'><CardList Courses={CoursesStan} /></div>
				</div>
				<div className='headRight'>
					<div className='hRightBoard'>
						<em><h3 className='tHead'>Advanced Level</h3></em>
						<em><p className='tBot'>Suitable for schools and lay <br/>audiences.</p></em>
				    </div>
					<div className='hRightLinks'><CardList Courses={CoursesStan} /></div>
				</div>
			</div>
			
		</div>
	    );
	}
  
}
export default Home;