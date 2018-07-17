import React,  { Component } from  'react';

const Card = ({vidsource, title, img }) => {
	return(
		<div className='spans'>
			<a href={vidsource}  title={title}>
				<img src={img} />
			</a>	
		</div>
		);
}
export default Card;