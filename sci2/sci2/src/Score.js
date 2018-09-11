import React, { PropTypes } from 'react';


const Score = ({score}) => {
	return(
		<span className="quiz score">Score: {score}</span>
		);
}

// Score.PropTypes = {
// 	score: PropTypes.number.isRequired
// };

export default Score;