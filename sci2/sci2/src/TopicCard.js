import React from 'react';
import BigCard from './BigCard';

const TCardList = ({}) => {
	return (
		<div>
			trt.map((cor, inde) => {
				<BigCard 
					key={inde}
					img={trt[inde].img}
					text={trt[inde].text}
					/>
			})
		</div>

		)
}