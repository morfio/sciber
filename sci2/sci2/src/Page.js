import React, { Component } from 'react';
import Youtube from 'react-youtube';
//import CardList from './CardList';
//import { Link, Route } from 'react-router-dom';
//import {CoursesStan} from './CoursesStan';
import {PCardList} from './PageCardAPI';
import PageCardList from './PageCardList';
import BigCard from './BigCard';
import TopicApi from './topicApi';
import Board from './Board';
import TopicAPI2 from './test1';
import stemcellactivity1 from './images/stemcellactivity1.png';
import stemcellactivity2 from './images/stemcellactivity2.png';
import stemcellactivity3 from './images/stemcellactivity3.png';
import './Page.css';
// const Page = ({courses, vidsource}) => {
	// const state = { `courses title video`};



//Component to render Activity object


class Page extends Component  {
	constructor(props) {
		super(props);
		// console.log(match)
		let match = props.match;
		this.state = {
			topic: {},
			activity: [],
			opinion:{},
			quiz: '',
			// match:{match},
			vidsource: ''
					};	
		{console.log(match)}
	
	this.showWhat = this.showWhat.bind(this);	
}	
	
	showWhat() {
		const matchs = this.props.match.path;
		console.log('yes' ,matchs)
		if (matchs === '/:Standard/:topic')
		{
			return <Youtube 
	 			 		videoId = {this.state.vidsource} 
	 			 		onReady={this._onReady}
 			 		/>			
		} else if (matchs === '/:Advanced/:topic')
		{
			return <Youtube 
	 			 		videoId = {this.state.vidsource} 
	 			 		onReady={this._onReady}
 			 		/>
		}else {return null}

	}
	componentDidMount(){
		// console.log(this.props)
		// console.log(this.state)
		// console.log(this.props.match.url)

		// const vidsource = TopicAPI2.vid(this.props.match.params.topic);
		// var topic = TopicAPI2.jet(this.props.match.params.topic);
		// console.log(vidsource);
		// console.log(topic);
		// this.setState({
		// 	vidsource: vidsource
		// })
		
		// console.log(this.state.opinion)
		// console.log(this.state)

	}
	
	
	render(){		
		console.log(this.props.vidsource);
		
			
			return(
			<div className="pageTop">
				  
					
				 <div className='linkCardList ma2'>
				   <PageCardList 
				   	className=""
				   	PCardList={PCardList} matchi={this.props.match.url} toBeGot={this.props.match.params.topic} //give Pcardlist onclick function that gets match.url
				   	/>
				    
				  </div>
			</div>
			);
	}
}

export default Page;

// <Youtube 
// 			 		videoId = {this.state.vidsource} 
// 			 		onReady={this._onReady}

// 			 	/>

		//let matcher = props.match.params.topic;
// const Page = ({courses, match, props}) => {
		// const urlto = (this.props.match.params.topic);
		// const Urlto = ({toBeren})  => {   
						 
		// 					if (toBeren === 'Opinion' ) {
		// 							return <Opinion Opinion={opi} />
		// 						} else if (toBeren === 'Science'){
		// 							return <Youtube videoId = {this.props.vidsource} />
		// 						} else if (toBeren === 'Activities'){
		// 							return <Activity Activity={Active} />
		// 						} else {
		// 							return <Youtube 
		// 									videoId = {this.props.vidsource}
		// 							 		opts={opts}
		// 				    				onReady={this._onReady}/>
				
		// 				}}
		//<Urlto toberen={this.props.match.url}	
		// <Youtube 
		//  			 		videoId = {this.state.vidsource} 
		//  			 		onReady={this._onReady}
	 // 			 		/>
