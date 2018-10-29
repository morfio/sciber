import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import teachers from './images/teachers.jpg';
import scientistt from './images/scientistt.png';
import schools from './images/schools.jpg';
import welcome from './images/welcome.jpg';
 import './RCarousel.css';

export default class RCarusel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider style={{width:1024}}>
          <Slide index={0}><div className='scrollB' id='scroll1'>
						<div className='sText'>
							<article>
								<h2>Welcome to SciberBrain</h2>
								<p>SciberBrain is a collection of resources to stimulate group
								 discussions about controversial aspects of science. Choose the level and topic
							    (below) for your group and away you go.</p>
							    <button></button>
							</article>
			            </div>
						<div className='sImage'>
						  <img src={teachers} />
						</div>
					</div>
			</Slide>
			<Slide index={1}><div className='scrollB' id='scroll2'>
						<div className='sText'>
							<article>
								<h2>SciberBrain for scientists</h2>
								<p>Use SciberBrain resources to help plan 
								a group discussion or outreach activity 
								regarding a controversial aspect of science.
								  Check out the Public engagement section for 
								  some event ideas.
								</p>
							    <button></button>
							</article>
			            </div>
						<div className='sImage'>
						  <img src={scientistt} />
						</div>
			 		</div></Slide>
          <Slide index={2}><div className='scrollB' id='scroll3'>
						<div className='sText'>
							<article>
								<h2>SciberBrain for Schools</h2>
								<p>Use SciberBrain resources to 
								prepare for a class discussion about a 
								controversial aspect of science. Select your
								 level and topic (below) to get some facts and opinions…
								 </p>
							    <button></button>
							</article>
			            </div>
						<div className='sImage'>
						  <img src={schools} />
						</div>
					</div></Slide>                
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> 
      </CarouselProvider>
    );
  }
}
// <Slide index={1}><div className='slide' id='scroll2'>
// 						<div className='sText'>
// 							<article>
// 								<h2>SciberBrain for scientists</h2>
// 								<p>Use SciberBrain resources to help plan 
// 								a group discussion or outreach activity 
// 								regarding a controversial aspect of science.
// 								  Check out the Public engagement section for 
// 								  some event ideas.
// 								</p>
// 							    <button></button>
// 							</article>
// 			            </div>
// 						<div className='sImage'>
// 						  <img src={scientistt} />
// 						</div>
// 			 		</div></Slide>
//           <Slide index={2}><div className='slide' id='scroll3'>
// 						<div className='sText'>
// 							<article>
// 								<h2>SciberBrain for Schools</h2>
// 								<p>Use SciberBrain resources to 
// 								prepare for a class discussion about a 
// 								controversial aspect of science. Select your
// 								 level and topic (below) to get some facts and opinions…
// 								 </p>
// 							    <button></button>
// 							</article>
// 			            </div>
// 						<div className='sImage'>
// 						  <img src={schools} />
// 						</div>
// 					</div></Slide>