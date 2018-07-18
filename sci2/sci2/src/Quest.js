import React,  { Component } from  'react';


const Question = ({text, a,b,c,d}) =>
{
	return(
		<div className='question'>
		 	<p>{text}</p>
		 	<ul>
		 		<li>{a}</li>
		 		<input type="radio" id="a"></input>
		 		<li>{b}</li>
		 		<li>{c}</li>
		 		<li>{d}</li>
		 	</ul>
		</div>	
		 	);
}

export default Question;