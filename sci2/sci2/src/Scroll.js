// import React from 'react';
// import {HomeScrollList} from './ScrollList';


import React from "react";
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import teachers from './images/teachers.jpg';
import scientistt from './images/scientistt.png';
import schools from './images/schools.jpg';
import welcome from './images/welcome.jpg';

const Scroll = ({titleheader, bodytext,img,props}) => {

	return (
		<div className='slide' >
			<div className='sText'>
				<article>
					<h2>{titleheader}</h2>
					<p>{bodytext}
					 </p>
					
				    <button onClick={props.onClick}></button>
				</article>
            </div>
			<div className='sImage'>
			  <img src={img} />
			</div>
		</div>
		);
}



const scrollArray = ({HomeScrollList}) => {
	return (
		<div>
			{
				HomeScrollList.map((scro,index) => {
					return (
							<Scroll
								key={index}
								titleheader={HomeScrollList[index].titleheader}
								bodytext={HomeScrollList[index].bodytext}
								img={HomeScrollList[index].img}
								/>
						);
				

				})
			}


 		</div>

 		)

 }

export default scrollArray;



// class Scroll extends React.Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     }

//     return (
    	
//     	);
// }

// }
// export default Scroll;
// <div>			
// 			<Slider {...settings}>
// 			        <div className='scrollB' id='scroll1'>
// 						<div className='sText'>
// 							<article>
// 								<h2>Welcome to SciberBrain</h2>
// 								<p>SciberBrain is a collection of resources to stimulate group
// 								 discussions about controversial aspects of science. Choose the level and topic
// 							    (below) for your group and away you go.</p>
// 							    <button></button>
// 							</article>
// 			            </div>
// 						<div className='sImage'>
// 						  <img src={teachers} />
// 						</div>
// 					</div>
// 			        <div className='scrollB' id='scroll2'>
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
// 			 		</div>
// 			        <div className='scrollB' id='scroll3'>
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
// 					</div>
// 			        <div className='scrollB' id='scroll4'>
// 						<div className='sText'>
// 							<article>
// 								<h2>Welcome to SciberBrain</h2>
// 								<p>SciberBrain is a collection of resources to stimulate group
// 								 discussions about controversial aspects of science. Choose the level and topic
// 							    (below) for your group and away you go.</p>
// 							    <button></button>
// 							</article>
// 			            </div>
// 						<div className='sImage'>
// 						  <img src={welcome} />
// 						</div>
// 					</div>		        
// 		    </Slider>
//         </div>




