import React from 'react';
import  { Link, Route } from 'react-router-dom';
import Card from './Card';
import Page from './Page';
import {Courses} from './CoursesStan';


const CardList = ({Courses, match,}) => {

	return (
		 
			<div className ='cardList' >			
				{				  	
				  	Courses.map((cor, inde) => {
				  		return (			  			
				  			<Card className='spans'
				  			  key={inde}
				  			  id={Courses[inde].id}
				  			  vidsource = {Courses[inde].vidsource}
				  			  title = {Courses[inde].title}
				  			  img = {Courses[inde].img}
				  			  topic={Courses[inde].topic}  	  
				  			/>			  			
				  		)
				  	})			  	
				  }
			  
			</div>
			
		);
}

export default CardList;

// <Link to={`/Standard/:topic`}>
// </Link>
// 			  <Route path={`/Standard/:topic`} component={Page} />