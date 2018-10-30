import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import HcardLinks from './HcardLinks';
import Navigation from './Navigation';
import './index.css';
import  './Standard.css';
import { CoursesStan } from './CoursesStan';
import Vaccinations from './images/Vaccinations.gif';
import StemC from './images/Stem_Cell.gif';
import Clinical from './images/Clinical_Trials.gif';
import Evolution from './images/Evolution.gif';
import Brains from './images/Brain_Chemistry.gif';
import {NavHeader} from './NavHeader';
import Footer from './Footer';


const NavLinks = [{nav:'/Standard/Stem-Cells',text:'Stem Cells'},
					{nav:'/Standard/Genetic-Engineering',text:'Genetic Engineering'},
					{nav:'/Standard/Brain-Chemistry',text:'Brain Chemistry '},
					{nav:'/Standard/Vaccinations', text:'Vaccinations'},
					{nav:'/Standard/Clinical-Trials', text:'Clinical Trials'},
					{nav:'/Standard/Evolution', text:'Evolution'},
					{nav:'/Standard/PGD', text:'PGD'}]

const Slides = [{header:'Vaccinations',text1:'What are vaccinations and how they work?',
									text2: 'Why did the MMR vaccination become controversial?',
									text3: 'Should some vaccinations be compulsory',img:Vaccinations},
				{header:'Stem-Cells',text1: 'What are stem cells?',
									text2: 'Why is embryonic stem cell research so interesting to scientists?',
									text3: 'What can scientists do now with embryonic stem cells?',
									text4: 'What are the possible implications for society?',img:StemC},
				{header:'Genetic engineering',
									text1: 'What is genetic engineering?',
									text2: 'Why is genetic engineering so interesting to scientists and society?',
									text3: 'What can scientists do now with genetic engineering?',
									text4: 'What are the future possible applications of genetic engineering?',img:StemC},
				{header:'Brain chemistry',
									text1: 'What are neurons?',
									text2: 'How do our senses detect external stimuli?',
									text3: 'How can drugs affect the brain?',
									text4: 'Why do some people want to alter their brains?',img:Brains},
				{header:'Evolution',
									text1: 'What was Charles Darwin’s ‘Natural Selection’ idea?',
									text2: 'How does it explain new species?',
									text3: 'What new scientific evidence supports natural selection?',
									text4: 'Why can teaching evolution in schools be controversial?',img:Evolution},
				{header:'Clinical trials',
									text1: 'How are new medicines tested and developed?',
									text2: 'Who or what should test new medicines?',
									text3: 'Why do we need more medicines?',
									text4: 'Who decides how we should test new medicines?',img:Clinical},
				]

				


				
class Standard extends Component {
	constructor(props){
		super(props);
		this.state = {
			// elements for carddlist
			counter:0 ,
			header: 'Clinical trials',
			text1: 'How are new medicines tested and developed?',
			text2: 'Who or what should test new medicines?',
			text3: 'Why do we need more medicines?',
			text4: 'Who decides how we should test new medicines?',
			img: Clinical		
		}
		this.setScroll  = this.setScroll.bind(this); 
	  	this.onClock = this.onClock.bind(this);
	  	this.forward = this.forward.bind(this); 
	  	this.backSet = this.backSet.bind(this);
	  	this.backward = this.backward.bind(this);
	}
	forward() {
		this.onClock();
		this.setScroll();
	}
	backward(){
		this.backSet();
		this.setScroll();
	}

	onClock() { 
		//get present value of counter
		let newCount = this.state.counter + 1;
		//roll back if at limit of array
		if (newCount >= Slides.length){
			newCount = 0;
		} else {
			newCount = newCount;
		}
		//update counter value
		this.setState({
			counter: newCount
		})

	}

	backSet() {
		let backCount = this.state.counter - 1;
		if (backCount <= 0) {
			backCount = Slides.length - 1;
		} else {
			backCount = backCount;
		}
		this.setState({
			counter: backCount
		})


	}
	setScroll() {
		const presentScroll = Slides[this.state.counter];
		console.log(presentScroll)
		//Define keys of template
		const header = presentScroll.header;
		const t1 = presentScroll.text1;
		const t2 = presentScroll.text2;
		const t3 = presentScroll.text3;
		const t4 = presentScroll.text4;
		const img = presentScroll.img;
		//set State to required values
		this.setState({			
			header: header,
			text1: t1,
			text2: t2,
			text3: t3,
			text4: t4,
			img:img
		})

	}	

	render () {
		return(
				<div className='standardTop'>
		
					
					<div className=' navro'><NavHeader NavLinks={NavLinks} /></div>					  
					
					
					
					<div className='content'>
						<div className='stanhead'>
						<div className='topBNav'><span><NavLink to='/Standard'>Standard Level</NavLink> / <NavLink to='/Advanced'>Advanced Level</NavLink></span></div>
						<span className="wideHead"><p className='headWide'>Standard Level</p></span>
						</div>
						<div>
							<div className='slidesho'>
								<div className='Vaccinations show '>
								  <div className='bText rounded-left'>
									<h3 className='topHeader'>{this.state.header}</h3>
									<ul>
										<li><p className='topHeader'>{this.state.text1}</p></li>
										<li><p className='topHeader'>{this.state.text2}</p></li>
										<li><p className='topHeader'>{this.state.text3}</p></li>
										<li><p className='topHeader'>{this.state.text4}</p></li>
									</ul>

								  </div>
								  <div className='bImage rounded-right'>
							  			<img src={this.state.img}/>
								  </div>
								  	
								  	<div className='theButtons'>
										<button className="scrollButton rounded-right rounded-left" onClick={this.forward}>&#8249;</button>
										<button className="scrollButton rounded-right rounded-left" onClick={this.backward}>&#8250;</button>
									</div>
								</div>
								
								</div>	
							</div>
						</div>	
						<div className='cardlinks'>
						<HcardLinks Courses ={CoursesStan}/>
						</div>
					</div>						
				
				);
		}
		
}

export default Standard;



// <div>

// 						  <span><a href='#'> Home </a></span>
// 						  <span><a href='#'> Standard Level </a></span>
// 						  <span><a href='#'> Advanced Level </a></span>
// 						  <span><a href='#'> Facilitators </a></span>
// 						  <span><a href='#'> About </a></span>
// 					  </div>

// <div className='Stem Cells show'>
// 								  <div className='bText'>
// 									<h3>
// 										Stem Cells
// 									</h3>
// 									<ul>
// 										<li><p>What are stem cells?</p></li>
// 										<li><p>Why is embryonic stem cell research so interesting to scientists?</p></li>
// 										<li><p>What can scientists do now with embryonic stem cells? </p></li>
// 										<li><p>What are the possible implications for society?</p></li>
// 									</ul>
// 								  </div>

// 								  <div className='bImage'>
// 							  			<img src={StemC}/>
// 								  </div>	
// 								</div>
// 								<div className='Genetic show'>
// 								  <div className='bText'>
// 									<h3>
// 										Genetic engineering
// 	       							</h3>
// 									<ul>
// 										<li><p>What is genetic engineering?</p></li>
// 										<li><p>Why is genetic engineering so interesting to scientists and society?</p></li>
// 										<li><p>What can scientists do now with genetic engineering?</p></li>
// 										<li><p>What are the future possible applications of genetic engineering?</p></li>
// 									</ul>
// 								  </div>
// 								  <div className='bImage'>
// 							  			<img src={StemC}/>
// 								  </div>	
// 								</div>
// 								<div className='Brain show'>
// 								   <div className='bText'>
// 									<h3>       
// 										Brain chemistry			
// 									</h3>
// 									<ul>
// 										<li><p> What are neurons?</p></li>
// 										<li><p>How do our senses detect external stimuli?</p></li>
// 										<li><p>How can drugs affect the brain?</p></li>
// 										<li><p>Why do some people want to alter their brains?</p></li>
// 									</ul>
// 								   </div>
// 								   <div className='bImage'>
// 							  			<img src={Brains}/>
// 								   </div>	
// 								</div>
// 								<div className='Evolution show'>
// 								  <div className='bText'>
// 									<h3>
// 										Evolution
// 	     							</h3>
// 									<ul>
// 										<li><p>What was Charles Darwin’s ‘Natural Selection’ idea?</p></li>
// 										<li><p>How does it explain new species?</p></li>
// 										<li><p>What new scientific evidence supports natural selection?</p></li>
// 										<li><p>Why can teaching evolution in schools be controversial?</p></li>
// 									</ul>
// 								  </div>
// 								  <div className='bImage'>
// 							  			<img src={Evolution}/>
// 								  </div>	
// 								</div>
// 								<div className='Clinical trials show'>
// 								  <div className='bText'>
// 									<h3>
// 	    								Clinical trials
// 	    							</h3>
// 									<ul>
// 										<li><p>How are new medicines tested and developed? </p></li>
// 										<li><p>Who or what should test new medicines?</p></li>
// 										<li><p>Why do we need more medicines?</p></li>
// 										<li><p>Who decides how we should test new medicines?</p></li>
// 									</ul>
// 								  </div>
// 								  <div className='bImage'>
// 							  			<img src={Clinical}/>
// 								  </div>