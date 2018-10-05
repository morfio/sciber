import React from 'react';
import  { Link, Route } from 'react-router-dom';
import CardAdv from './CardAdv';
import Page from './Page';
import {Courses} from './CoursesStan';
import Advanced from './Advanced';


const CardListAdv = ({Courses, match}) => {

	return (
		 
			<div className ='cardList' >
			  {
			  	
			  	Courses.map((cor, inde) => {
			  		return (
			  			
			  			<CardAdv className='spans'
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

export default CardListAdv;

// <Link to="Advanced/:topic">
// </Link>