import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
//import Navigation from './Navigation';
//import Footer from './Footer';
import ScrollBox from './ScrollBox';
import CardList from './CardList';
import CardListAdv from './CardListAdv';
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
// import Button from './Button';
// import './NewHome.css';
import Slider from "react-slick";
// import "./slick-carousel/slick/slick.css";
import Scroll from './Scroll';
import RCarusel from './RCarousel';
import  scrollArray from './Scroll';
import teachers from './images/teachers.jpg';
import scientistt from './images/scientistt.png';
import schools from './images/schools.jpg';
import welcome from './images/welcome.jpg';

// const Button = styled.button`/* ... */`

const HomeScrollList  = [
					{titleheader:"Welcome to SciberBrain",
					bodytext:"SciberBrain is a collection of resources to stimulate group discussions about controversial aspects of science. Choose the level and topic(below) for your group and away you go.",
					img:welcome},
					{titleheader:"SciberBrain for scientists",
					bodytext:"Use SciberBrain resources to help plan a group discussion or outreach activity regarding a controversial aspect of science.Check out the Public engagement section for some event ideas.",
					img:scientistt},
					{titleheader:"SciberBrain for Schools",
					bodytext:"Use SciberBrain resources to prepare for a class discussion about a controversial aspect of science. Select your level and topic (below) to get some facts and opinions…",
					img:teachers}
					

];

class Home extends Component {
	constructor(props){
	  super(props);	
	  this.state = {
	  	image : {},
	  	scrollTitle: 'Welcome to SciberBrain',
	  	bodyText: 'SciberBrain is a collection of resources to stimulate group discussions about controversial aspects of science. Choose the level and topic(below) for your group and away you go.',
	  	scrollImage: welcome,
	  	counter: 0
	  	 
	  }
	  this.setScroll  = this.setScroll.bind(this); 
	  this.onClock = this.onClock.bind(this);
	  this.forward = this.forward.bind(this); 
	}

	forward() {
		this.onClock();
		this.setScroll();
	}

	onClock() { 
		//get present value of counter
		let newCount = this.state.counter + 1;
		//roll back if at limit of array
		if (newCount >= HomeScrollList.length){
			newCount = 0;
		} else {
			newCount = newCount;
		}
		//update counter value
		this.setState({
			counter: newCount
		})

	}
	setScroll() {
		const presentScroll = HomeScrollList[this.state.counter];
		//Define keys of template
		const sc = presentScroll.titleheader;
		const sth = presentScroll.bodytext;
		const si = presentScroll.img
		//set State to required values
		this.setState({
			scrollTitle : sc,
			bodyText: sth,
			scrollImage: si
		})

	}	

  render() 
	{
		
		return(
		<div className='container'>
			<div className='scrollB'>
				<div className='sText'>
						<article>
							<h2>{this.state.scrollTitle}</h2>
							<p>{this.state.bodyText}</p>						    
						</article>
						<Button bsStyle="primary" bsSize="large" onClick={this.forward}>
     							Find out more
    					</Button>
		        </div>
				<div className='sImage'>
					  <img  src={this.state.scrollImage} className='imgScroll'/>
				</div>
			</div>
					
			<div className='headLinks'>
				<div className='headLeft'>
					<div className='hLeftBoard'>
						<em><h3 className='tHeadL'><br/>Standard Level</h3></em>
						<em><p className='tBotL'>Suitable for schools and lay <br/>audiences.</p></em>
				    </div>
					<div className='hLeftLinker'><CardList Courses={CoursesStan} /></div>
				</div>
				<div className='headRight'>
					<div className='hRightBoard'>
						<em><h3 className='tHead'><br/>Advanced Level</h3></em>
						<em><p className='tBot'>Suitable for schools and lay <br/>audiences.</p></em>
				    </div>
					<div className='hRightLinks'><CardListAdv Courses={CoursesStan} /></div>
				</div>
			</div>
			
		</div>
	    );
	}
  
}
export default Home;

// <div className='scrollB content'>
// 					<div className='sText'>
// 						<article>
// 							<h2>Welcome to SciberBrain</h2>
// 							<p>SciberBrain is a collection of resources to stimulate group
// 							 discussions about controversial aspects of science. Choose the level and topic
// 						    (below) for your group and away you go.</p>
// 				-		    <Button bsStyle="primary" bsSize="large">
//      							Large button
//     						</Button>
// 						</article>
// 		            </div>
// 					<div className='sImage'>
// 					  <img  src={science} />
// 					</div>
// 			</div>
// <div className='scrollB content'>
// 					<div className='sText'>
// 						<article>
// 							<h2>Welcome to SciberBrain</h2>
// 							<p>SciberBrain is a collection of resources to stimulate group
// 							 discussions about controversial aspects of science. Choose the level and topic
// 						    (below) for your group and away you go.</p>
// 						    <Button bsStyle="primary" bsSize="large">
//      							Large button
//     						</Button>
// 						</article>
// 		            </div>
// 					<div className='sImage'>
// 					  <img  src={science} />
// 					</div>
// 			</div>
// <div className='slide' id='scroll1'>
// 			<div className='sText'>
// 				<article>
// 					<h2>Welcome to SciberBrain</h2>
// 					<p>SciberBrain is a collection of resources to stimulate group
// 					 discussions about controversial aspects of science. Choose the level and topic
// 				    (below) for your group and away you go.</p>
// 				    <Button/>
// 				</article>
//             </div>
// 			<div className='sImage'>
// 			  <img src={science} />
// 			</div>
// 		</div>
//         <div className='slide' id='scroll2'>
// 			<div className='sText'>
// 				<article>
// 					<h2>SciberBrain for scientists</h2>
// 					<p>Use SciberBrain resources to help plan 
// 					a group discussion or outreach activity 
// 					regarding a controversial aspect of science.
// 					  Check out the Public engagement section for 
// 					  some event ideas.
// 					</p>
// 				    <Button/>
// 				</article>
//             </div>
// 			<div className='sImage'>
// 			  <img src={science} />
// 			</div>
//  		</div>
//        <div className='slide' id='scroll3'>
// 			<div className='sText'>
// 				<article>
// 					<h2>SciberBrain for Schools</h2>
// 					<p>Use SciberBrain resources to 
// 					prepare for a class discussion about a 
// 					controversial aspect of science. Select your
// 					 level and topic (below) to get some facts and opinions…
// 					 </p>
// 				    <Button/>
// 				</article>
//             </div>
// 			<div className='sImage'>
// 			  <img src={science} />
// 			</div>
// 		</div>
//         <div className='slide' id='scroll4'>
// 			<div className='sText'>
// 				<article>
// 					<h2>Welcome to SciberBrain</h2>
// 					<p>SciberBrain is a collection of resources to stimulate group
// 					 discussions about controversial aspects of science. Choose the level and topic
// 				    (below) for your group and away you go.</p>
// 				    <Button/>
// 				</article>
//             </div>
// 			<div className='sImage'>
// 			  <img src={science} />
// 			</div>
// 		</div>