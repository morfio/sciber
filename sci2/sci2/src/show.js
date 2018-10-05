import React from 'react';
import YouTube from 'react-youtube';
import TopicAPI2 from './test1';

const Api = ((props) =>{
	console.log(props);
	

})

// ({ match }) => {
// 	let source = match.params.topic
// 	{console.log(source)}
// 	//let me = TopicApi2.vid(source)

// } 


const show = ({ match, props,vids }) => {
	return(
			
			<div>
			    {vids = match.params.topic};
				{console.log(match.url)};
				{console.log(props)};
				{console.log(match.path)};
				{console.log(match.params.topic)}; //based on this topic select the vidsource for page				
				{console.log(vids)};
				{console.log(TopicAPI2.vid(vids))}

			</div>



		)


}
export default show;