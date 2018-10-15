import React from 'react';
import './BigCard.css';
import { Link, Route } from 'react-router-dom';


const BigCard = ({img, tag, text,links}) => {
	return(
		<div className='bigCard'>
			<Link to='/:Level/:topic/:section'>
				<img src={img}  className='bigImg'/>
				<p className='bigTag'>{tag}</p>
				<p className='bigText'>{text}</p>
			</Link>
			
		</div>
		)
}

export default BigCard;