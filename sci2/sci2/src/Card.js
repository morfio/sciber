import React,  { Component } from  'react';
import { Link, Route } from 'react-router-dom';
import Page from './Page';
// import CardList from './CardList';


const Card = ({vidsource, title, img, topic, match}) => {
	return(
		<div className='spans'>
			<Link  to={`/Standard/${topic}/Science`}>
				<div className='spans'>
					
						<img src={img} topic={topic} />
							
				</div>
			</Link>
		
		</div>
		
		);
}
export default Card;


// <div className='spans'>
// 			<Link  to={`/Standard/${topic}`}> 
// 				<img src={img} topic={topic} />
// 			</Link>	

		
// 		</div>