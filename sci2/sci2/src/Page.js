import React, { Component } from 'react';
import Youtube from 'react-youtube';
//import CardList from './CardList';
//import { Link, Route } from 'react-router-dom';
//import {CoursesStan} from './CoursesStan';
import {PCardList} from './PageCardAPI';
import PageCardList from './PageCardList';
import BigCard from './BigCard';
import TopicApi from './topicApi';
// const Page = ({courses, vidsource}) => {
	// const state = { `courses title video`};

//Component to render opinion object
const Opinion = ({ Opinion}) => {
	return(
		<div>
			{
				Opinion.map((card, index) => {
					return(
						<BigCard className='opinions'
							key={index}
							img={Opinion[index].img}
							tag={Opinion[index].tag}
							text={Opinion[index].text} 
							links={Opinion[index].links}
						/>
							)
				})
			}
		</div>
		)
}
//Component to render Activity object
const Activity = ({Activity}) => {
	return(
		<div>
			{Activity.map((activity, index) =>
				{
					return(
							<BigCard className='activity'
								key={index}
								img={Activity[index].img}
								tag={Activity[index].tag}
								text={Activity[index].text} 
								links={Activity[index].links}
							/>
							)
				}
			)}
		</div>
		)
}
class Page extends Component  {

	constructor(props){
		super(props);
		this.state = {
			topic: '',
			Opinion: '',
			Activity: '',
			Quiz: '',
			match:this.props.match
					};	

		
	
}	
	componentDidMount(props){
		const topic = TopicApi.rec(this.props.match.params.topic);
		this.setState((function (topic) {
			topic:topic;
			Opinion: topic.opinion;
			Activity: topic.Activity;
			Quiz: topic.quiz;
			match:props.match.params
		}))
		console.log(1,topic)
	}
	render()
	{
		console.log((this.props.vidsource));
		const opts = {
		height: '390',
		width: '100%',
		playerVars: {// https://developers.google.com/youtube/player_parameters
			autoplay:1
				}
		}

		//let matcher = props.match.params.topic;
// const Page = ({courses, match, props}) => {
		console.log(this.props)
		return(
			<div className="">
			  <div className='titleTag'>
			    <span>{this.props.match.params.topic}</span> 
			  </div>
			
			 <div className='linkCardList ma2'>
			   <PageCardList 
			   	className=""
			   	PCardList={PCardList}
			   	/>
			    
			  </div>
			</div>
			);
	}
}

export default Page;