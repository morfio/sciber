import React from 'react';

const BigCard = ({img, tag, text,links}) => {
	return(
		<div>
			<div>
				<img src={img} />
				<p>{tag}</p>
			</div>
			<div>
				<p>{text}</p>
			</div>
		</div>
		)
}

export default BigCard;