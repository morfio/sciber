import React from 'react';
import topicApi from './topicApi';

let tag = JSON.stringify(topicApi.all());
console.log(tag);
const Test =() => {
	return(
		<h1>{tag}</h1>
		
		);
}

export default Test;