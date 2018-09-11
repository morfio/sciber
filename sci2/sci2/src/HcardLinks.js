import React from 'react';
import Card from './Card';
import {Courses} from './CoursesStan';
import './HcardLinks.css';

const Hcardlinks = ({Courses}) => {
console.log({Courses});
	return (
		 
			<div className ='listhead' >
			  {
			  	Courses.map((cor, inde) => {
			  		return (
			  			<Card className='items'
			  			  key={inde}
			  			  id={Courses[inde].id}
			  			  vidsource = {Courses[inde].vidsource}
			  			  title = {Courses[inde].title}
			  			  img = {Courses[inde].img}

			  			/>  

			  		)
			  	})
			  }
			</div>
			
		);
}

export default Hcardlinks;