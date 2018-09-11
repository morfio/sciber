import React from 'react';
import CardList from './CardList';
import { Link } from 'react-router-dom'
import {CoursesStan} from './test2';

const Page = (props) => {
	 const topic = CoursesStan.get(
	 	this.props.match.params.topic, topic)

	 if(!topic){
	 	return <div>Sorry, but the player was not found</div>
	 }
	 
	return(
		<div>
		  <div className='titleTag'>
		    <span>props.title</span> //titlebox
		  </div>
		  <div className='videoBox'>
		    <iframe width="420" height="315">
				src={ vidsource}
			</iframe>
		  </div>
		 <div className='linkCardList'>
		   <CardList Courses={CoursesStan}/>
		    <div className='linkCard'> //map (es6 foreach) 6 times in 3x2 grid
  	        <a href='' title=''>
  	        <img src='' />
            </a>
            </div>
		  </div>
		</div>
		);
}

export default Page;