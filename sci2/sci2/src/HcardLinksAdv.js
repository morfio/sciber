import React from 'react';
import { Link, Route } from 'react-router-dom';
import CardAdv from './CardAdv';
import {Courses} from './CoursesStan';
import './HcardLinks.css';
import Page from './Page';

const Hcardlinks = ({Courses, match}) => {
// console.log({Courses});
	return (
		 
			<div className ='listhead' >
			  {
			  	Courses.map((cor, inde) => {
			  		return (
			  			
				  			<CardAdv className='items'
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

export default Hcardlinks;