import React, { Component } from 'react';
import './Board.css';
import { Link } from 'react-router-dom';
import TopicAPI2 from './test1';
import Youtube from 'react-youtube';
import Activity from './Activity';
import Opinion from './Opinion';
import PageCardList from './PageCardList';
import PageCardAPI from './PageCardAPI';
import {PCardList} from './PageCardAPI';
import Discuss from './Discuss.js'


// board will be passed props of this.props.match.url as matchi
// board will render ui based on what matchi is
// page also sends props of whatever is to be matched by topic.match.params. eg topic.activities if activty
//FOR DISCUSS ALL THE Text will be passed into the discuss component as props this.state from board, props.... from discuss

// const Board = (props) => {
class Board extends Component {
	constructor(props){
		super(props);
		this.state = {
			Subject: {},
			Activity: [],
			Opinion: {},
			Quiz:[],
			Vidsource:''
		};
		this.grabTop = this.grabTop.bind(this);
		this.grabType = this.grabType.bind(this);
	}
	grabType() {
		const got = this.props.match.params.section	  
		{console.log(got)}				 
		if (got === 'Opinion' ) {
				{console.log(this.state.Opinion)}
				return <Opinion Opinion={this.state.Opinion} />
			}
			 else if (got === 'Science'){
				return <Youtube videoId = {this.state.Vidsource} />
			} else if (got === 'Activities'){
				return <Activity Activity={this.state.Activity} />
			} else if (got === 'Quiz') {
					return JSON.stringify(this.state.Quiz);
			}else if (got === 'Discussion') {
				return <Discuss />
			}else{
				return <Youtube 
						videoId = {this.state.Vidsource}
				 		
	    				onReady={this._onReady}/>
				
						}

	}

	grabTop() {
		const los = this.props.match.params.dpd;
		const yo = TopicAPI2.jet(los);
		const vids = TopicAPI2.vid(los);
		const active = yo.activities;
		const opinion = yo.opinion;
		const quizno = yo.quiz;
		{console.log('yo', yo)}
		this.setState({
			Subject: yo,
			Activity: active,
			Opinion:opinion,
			Quiz: quizno,
			Vidsource: vids

		})

	}
	componentDidMount(){
		this.grabTop();


	}


	render(){
		
	
		return(
				<div className='boardMain'>
				<div>{this.grabType()}</div>
				<div></div>
				
				
					
				</div>
			);
	}
}



export default Board;


// const Board = (props) => {
// 	return (
// 		<div>
// 			<h1>Iam board</h1>
// 			{console.log(props)}
// 		{console.log(props.match.params.section)}
// 		</div>

// 		);