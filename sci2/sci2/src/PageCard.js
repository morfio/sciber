import React from 'react';
import {Link} from 'react-router-dom';
import activitiesInactive from './images/activities-inactive.gif';
import PCardList from './PageCardList';
import ('./PageCard.css');
//bg-light-green dib br3 h-100 grow h4 ma1

const PageCard = ({img, title, topic, match}) => {

	return (
		<div className='br3 grow ma1 bg-dark-red ba b--red dib bw2 top'>
			<Link to='/Standard/:topic'>
				<img className='dib' src={img} />
				<div>	
					<p className='tc text fw7 bg-dark-red'>{title}</p> topic={topic}
						title={title}
				</div>
			</Link>
		  	
		</div>
		)
}

export default PageCard;