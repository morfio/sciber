import React, { Component } from 'react';
import HcardLinks from './HcardLinks';
import Navigation from './Navigation';
import './index.css';
import  './Standard.css';
import { CoursesAdv } from './CoursesAdv';
import Vaccinations from './images/Vaccinations.gif';
import StemC from './images/Stem_Cell.gif';
import Clinical from './images/Clinical_Trials.gif';
import Evolution from './images/Evolution.gif';
import Brains from './images/Brain_Chemistry.gif';
// import Brains from './images/Brain_Chemistry.gif';
import Footer from './Footer';

class Standard extends Component {
	constructor(){
		super();
		this.state = {
			// elements for carddlist
		}
	}
	render (){
		return(
				<div >
					
					<div className='navro'>
					  <div>
						  <span><a href='#'> Home </a></span>
						  <span><a href='#'> Standard Level </a></span>
						  <span><a href='#'> Advanced Level </a></span>
						  <span><a href='#'> Facilitators </a></span>
						  <span><a href='#'> About </a></span>
					  </div>
					  <div><span><a href='./New'>Home</a> / <a href='./ScrollBox'>Advanced Level</a></span></div>
					</div>
					
					
					<div className='content'>
						<div className='stanhead'>
							<h2>Advanced Level</h2>
						</div>
						<div>
							<div className='slidesho'>
								<div className='Vaccinations show'>
								  <div className='bText'>
									<h3>Vaccinations</h3>
									<ul>
										<li><p>What are vaccinations and how they work?</p></li>
										<li><p>Why did the MMR vaccination become controversial?</p></li>
										<li><p>Should some vaccinations be compulsory</p></li>
										<li><p></p></li>
									</ul>
								  </div>
								  <div className='bImage'>
							  			<img src={Vaccinations}/>
								  </div>	
								</div>
								<div className='Stem Cells show'>
								  <div className='bText'>
									<h3>
										Stem Cells
									</h3>
									<ul>
										<li><p>What are stem cells?</p></li>
										<li><p>Why is embryonic stem cell research so interesting to scientists?</p></li>
										<li><p>What can scientists do now with embryonic stem cells? </p></li>
										<li><p>What are the possible implications for society?</p></li>
									</ul>
								  </div>

								  <div className='bImage'>
							  			<img src={StemC}/>
								  </div>	
								</div>
								<div className='Genetic show'>
								  <div className='bText'>
									<h3>
										Genetic engineering
	       							</h3>
									<ul>
										<li><p>What is genetic engineering?</p></li>
										<li><p>Why is genetic engineering so interesting to scientists and society?</p></li>
										<li><p>What can scientists do now with genetic engineering?</p></li>
										<li><p>What are the future possible applications of genetic engineering?</p></li>
									</ul>
								  </div>
								  <div className='bImage'>
							  			<img src={StemC}/>
								  </div>	
								</div>
								<div className='Brain show'>
								   <div className='bText'>
									<h3>       
										Brain chemistry			
									</h3>
									<ul>
										<li><p> What are neurons?</p></li>
										<li><p>How do our senses detect external stimuli?</p></li>
										<li><p>How can drugs affect the brain?</p></li>
										<li><p>Why do some people want to alter their brains?</p></li>
									</ul>
								   </div>
								   <div className='bImage'>
							  			<img src={Brains}/>
								   </div>	
								</div>
								<div className='Evolution show'>
								  <div className='bText'>
									<h3>
										Evolution
	     							</h3>
									<ul>
										<li><p>What was Charles Darwin’s ‘Natural Selection’ idea?</p></li>
										<li><p>How does it explain new species?</p></li>
										<li><p>What new scientific evidence supports natural selection?</p></li>
										<li><p>Why can teaching evolution in schools be controversial?</p></li>
									</ul>
								  </div>
								  <div className='bImage'>
							  			<img src={Evolution}/>
								  </div>	
								</div>
								<div className='Clinical trials show'>
								  <div className='bText'>
									<h3>
	    								Clinical trials
	    							</h3>
									<ul>
										<li><p>How are new medicines tested and developed? </p></li>
										<li><p>Who or what should test new medicines?</p></li>
										<li><p>Why do we need more medicines?</p></li>
										<li><p>Who decides how we should test new medicines?</p></li>
									</ul>
								  </div>
								  <div className='bImage'>
							  			<img src={Clinical}/>
								  </div>
								</div>	
							</div>
						</div>	
						<div className='cardlinks'>
						<HcardLinks Courses ={CoursesAdv}/>
						</div>
					</div>
						
				</div>
				)
		}
		
}

export default Standard;