import React,  { Component } from  'react';
import { Link, Route } from 'react-router-dom';
import Page from './Page';
import CardList from './CardList';


const CardAdv = ({vidsource, title, img, topic, match}) => {
	return(
		<div className='spans'>
			<Link  to={`/Advanced/${topic}`}> 
				<img src={img} topic={topic} />
			</Link>	

		
		</div>

		
		);
}
export default CardAdv;