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
// const Page = ({courses, vidsource}) => {
	// const state = { `courses title video`};
const opi = [  
                  {
                    im:stemcellactivity1,
                    tag: "A pastor's opinion",
                    text: "A 2 minute clip giving a religious perspective on the use of embryonic stem cells."
                     },
                  {
                    im:stemcellactivity2,
                    tag: "A patient's opinion",
                    text: "Watch this video 'Stem Cells - The Issue' which describes the use of stem cells in treating Parkinson's Disease."
                      },
                  {
                    im:stemcellactivity3,
                    tag: "A wheelchair user's opinion",
                    text: "A wheelchair user discusses his hopes and reservations about stem cell therapy in this 3-minute clip"
                      }
                ]
              

const Active =  [
              {
              
                im:"",
                tag: "Differentiation",
                text: "READ through this BBC Bitesize learning module and click the WATCH link"
                 },
              {
                im:"",
                tag: "Research",
                text: "EXPLORE the links to research stem cells from the University of Utah"
                  },
              {
                im:"",
                tag: "BBC News",
                text: "WATCH and READ this news item from 2008 to find out about the four stages in a windpipe transplant"
                  },
            ]
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
              // links={Opinion.links}
            />
              )
        })
      }
    </div>
    )
}

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
	this.handleState = this.handleState.bind(this)	
}	
	
	handleState() {
		this.setState({

		})

	}
	componentDidMount(){
		console.log(this.props)
		console.log(this.state)
		console.log(this.props.match.url)

		const vidsource = TopicAPI2.vid(this.props.match.params.topic);
		var topic = TopicAPI2.jet(this.props.match.params.topic);
		console.log(vidsource);
		console.log(topic);
		this.setState({
			vidsource: vidsource
		})
		
		console.log(this.state.opinion)
		console.log(this.state)
	}
	
	
	render(){		
		console.log(this.props.vidsource);
		const opts = {
		height: '390',
		width: '100%',
		playerVars: {// https://developers.google.com/youtube/player_parameters
			autoplay:1
				}
		}

		
			
			return(
			<div className="">
			  <div className='titleTag'>
			    
			  </div>
			 <div>
			 	<Youtube 
			 		videoId = {this.state.vidsource} 
			 		onReady={this._onReady}

			 	/>
			 	
			 </div>
				
				
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