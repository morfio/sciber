import React, { Component }from 'react';
import './ScrollBox.css';
import Slider from "react-slick";
import science from './images/scientists.jpg';
import Button from './Button';
import scrollArray from './Scroll';
import {HomeScrollList} from './ScrollList';
import Scroll from './Scroll';
import teachers from './images/teachers.jpg';
import scientistt from './images/scientistt.png';
import schools from './images/schools.jpg';
import welcome from './images/welcome.jpg';



class ScrollBox extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			counter: 0
		}

		this.onClock = this.onClock.bind(this);
	}

	onClock() { 
		this.setState({
			counter: this.state.counter + 1


		})

	}

	render(){
		const gat = HomeScrollList.map((scro, index) => {
			return (<div>
						<div className='sText'>
// 							<article>
// 								<h2>{scro[index].titleheader}</h2>
// 								<p>{scro[index].bodytext}</p>
// 							    <Button onClick={this.onClock}/>
// 							</article>
// 			            </div>
						<div className='sImage'>
// 						  <img src={science} />
// 						</div>
					</div>);
		});
		{console.log(gat)}
		const show = gat[this.state.counter]
		
// const Scrolls = [<Scroll titleheader='Welcome to SciberBrain' bodytext='SciberBrain is a collection of resources to stimulate group
//  				discussions about controversial aspects of science. Choose the level and topic(below) for your group and away you go.' img={welcome} onClick={this.onClock} />,
// 				 <Scroll titleheader='SciberBrain for scientists' bodytext='Use SciberBrain resources to help plan a group discussion or outreach activity 
//  					regarding a controversial aspect of science.Check out the Public engagement section for some event ideas.' img={scientistt} onClick={this.onClock} />,
// 				 <Scroll titleheader='SciberBrain for Schools' bodytext='Use SciberBrain resources to prepare for a class discussion about a 
//  					controversial aspect of science. Select your level and topic (below) to get some facts and opinions…' img={teachers} onClick={this.onClock}/>
// 					];
var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
 
	return(
			<div className='scrollBox'>
				{this.state.counter}
				{show}
				
				 
				
		    </div>
		)
	}
}

export default ScrollBox;

// <div className='slide' id='scroll1'>
// 						<div className='sText'>
// 							<article>
// 								<h2>Welcome to SciberBrain</h2>
// 								<p>SciberBrain is a collection of resources to stimulate group
// 								 discussions about controversial aspects of science. Choose the level and topic
// 							    (below) for your group and away you go.</p>
// 							    <Button/>
// 							</article>
// 			            </div>
// 						<div className='sImage'>
// 						  <img src={science} />
// 						</div>
// 				</div>
// 				<div className='slide' id='scroll2'>
// 						<div className='sText'>
// 							<article>
// 								<h2>SciberBrain for scientists</h2>
// 								<p>Use SciberBrain resources to help plan 
// 								a group discussion or outreach activity 
// 								regarding a controversial aspect of science.
// 								  Check out the Public engagement section for 
// 								  some event ideas.
// 								</p>
// 							    <Button/>
// 							</article>
// 			            </div>
// 						<div className='sImage'>
// 						  <img src={science} />
// 						</div>
// 				</div>
// 				<div className='slide' id='scroll3'>
// 					<div className='sText'>
// 						<article>
// 							<h2>SciberBrain for Schools</h2>
// 							<p>Use SciberBrain resources to 
// 							prepare for a class discussion about a 
// 							controversial aspect of science. Select your
// 							 level and topic (below) to get some facts and opinions…
// 							 </p>
// 						    <Button/>
// 						</article>
// 		            </div>
// 					<div className='sImage'>
// 					  <img src={science} />
// 					</div>
// 				</div>
// 				<div className='slide' id='scroll4'>
// 					<div className='sText'>
// 						<article>
// 							<h2>Welcome to SciberBrain</h2>
// 							<p>SciberBrain is a collection of resources to stimulate group
// 							 discussions about controversial aspects of science. Choose the level and topic
// 						    (below) for your group and away you go.</p>
// 						    <Button/>
// 						</article>
// 		            </div>
// 					<div className='sImage'>
// 					  <img src={science} />
// 					</div>
// 				</div>