import React from 'react';
import './BigCard.css';
import { Link, Route } from 'react-router-dom';


const BigCard = ({img, tag, text,links}) => {
	return(
		<div className='bigCard'>
			<a href={links}>
				<div className="banner">
				<img src={img}  className='bigImg'/>
				<p className='bigTag'>{tag}</p>
				</div>
				<p className='bigText'>{text}</p>		
				<a href="www.google.com"></a>
			
			</a>
		</div>
		)
}

export default BigCard;

// <Link to='/:Level/:topic/:section'>
// </Link>
// <Link to={links} replace={true}></Link>
// <a href="{links}"></a>