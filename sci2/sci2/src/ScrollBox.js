import React, { Component }from 'react';
import './ScrollBox.css';
import science from './images/scientists.jpg';
import Button from './Button';


class ScrollBox extends React.Component {
	render(){


	return(
			<div className='scrollBox'>
				<div className='slide' id='scroll1'>
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
						  <img src={science} />
						</div>
				</div>
				<div className='slide' id='scroll2'>
						<div className='sText'>
							<article>
								<h2>SciberBrain for scientists</h2>
								<p>Use SciberBrain resources to help plan 
								a group discussion or outreach activity 
								regarding a controversial aspect of science.
								  Check out the Public engagement section for 
								  some event ideas.
								</p>
							    <Button/>
							</article>
			            </div>
						<div className='sImage'>
						  <img src={science} />
						</div>
				</div>
				<div className='slide' id='scroll3'>
					<div className='sText'>
						<article>
							<h2>SciberBrain for Schools</h2>
							<p>Use SciberBrain resources to 
							prepare for a class discussion about a 
							controversial aspect of science. Select your
							 level and topic (below) to get some facts and opinions…
							 </p>
						    <Button/>
						</article>
		            </div>
					<div className='sImage'>
					  <img src={science} />
					</div>
				</div>
				<div className='slide' id='scroll4'>
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
					  <img src={science} />
					</div>
				</div>
				
		    </div>
		)
	}
}



export default ScrollBox;