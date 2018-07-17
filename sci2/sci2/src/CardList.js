import React from 'react';
import Card from './Card';
import {Courses} from './CoursesStan';

const CardList = ({Courses}) => {
console.log({Courses});
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

			  			/>  

			  		)
			  	})
			  }
			</div>
			
		);
}

export default CardList;