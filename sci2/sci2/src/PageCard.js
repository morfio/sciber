import React from  'react';
import {Link, Route} from 'react-router-dom';
import activitiesInactive from './images/activities-inactive.gif';
import Board from './Board';
// import PCardList from './PageCardList';
import './PageCard.css';
//bg-light-green dib br3 h-100 grow h4 ma1
// TOPIC IS UNDEFINED PROBLEM

const PageCard = ({img, title, topic, matchi,toBeGot}) => {
	return (
		<div className='br3 grow ma1   dib bw2 top'>
			<Link to={`${matchi}/${title}`}>
				
				<img className='dibs' src={img} />
					
					<p className='tc text fw7 bg-dark-red'>{title}</p>		
				
			</Link>
		</div>
		);
}

export default PageCard;

// <Route path={`${matchi}/:section`} component={Board} />
// {console.log(topic)};