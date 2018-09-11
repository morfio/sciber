import React, { PropTypes } from 'react';
import './Quiz.css';


const Progress = ({progress, total}) => {
	return (
		<span className="quiz progress">Question {progress + 1} of {total}</span>
		);
}

// Progress.propTypes = {
// 	progress: PropTypes.number.isRequired,
// 	total: PropTypes.number.isRequired
// };

export default Progress;
