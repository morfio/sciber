import React,  { Component } from  'react';
import Page from './Page';


import { Link, Route } from 'react-router-dom';

const Card = ({vidsource, title, img, topic, match}) => {
	return(
		<div className='spans'>
			<Link  to={{
						pathname: `/Standard/${topic}`,
						state:{
								topic: 'stem'
							}, 
						  
						title:{title}, 
						vidsource:{vidsource}
					}}> 
				<img src={img} topic={topic} />
			</Link>	

		
		</div>

		
		);
}
export default Card;


