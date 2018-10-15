import Stem from './images/stemCells_off.gif';
import genes from './images/Genetic_Engineering_off.gif';
import clinic from './images/ClinicalTrials_off.gif';
import vaccine from './images/Vaccinations_off.gif';
import brain from './images/Brain_Chemistry_off.gif';
import evolution from './images/Evolution_off.gif';
import pgd from './images/pgd_off.gif';
import stemcellactivity1 from './images/stemcellactivity1.png';
import stemcellactivity2 from './images/stemcellactivity2.png';
import stemcellactivity3 from './images/stemcellactivity3.png';
import stemcellopinionimage1 from './images/stemcellopinionimage1.png';
import stemcellopinionimage2 from './images/stemcellopinionimage2.png';
import stemcellopinionimage3 from './images/stemcellopinionimage3.png';
import evoopinionimage1 from './images/evoopinionimage1.png';
import evoopinionimage2 from './images/evoopinionimage2.png';
import evoopinionimage3 from './images/evoopinionimage3.jpg';
import evoactivityimage1 from './images/evoactivityimage1.png';
import evoactivityimage2 from './images/evoactivityimage2.png';
import evoactivityimage3 from './images/evoactivityimage3.png';
import genesopinionimage1 from './images/genesopinionimage1.png';
import genesopinionimage2 from './images/geneopinionimage2.png';
import genesopinionimage3 from './images/geneopinionimage3.png';
import geneactivityimage1 from './images/geneactivityimage1.png';
import geneactivityimage2 from './images/geneactivityimage2.png';
import geneactivityimage3 from './images/geneactivityimage3.png';
import vacactivity1 from './images/vacactivity1.png';
import vacactivity2 from './images/vacactivity2.png';
import vacactivity3 from './images/vacactivity3.png';
import vacopinion1 from './images/vacopinion1.png';
import vacopinion2 from './images/vacopinion2.png';
import vacopinion3 from './images/vacopinion3.png';
import brainactivityimage1 from './images/brainactivityimage1.png';
import brainactivityimage2 from './images/brainactivityimage2.png';
import brainactivityimage3 from './images/brainactivityimage3.png';
import brainopinionimage1 from './images/brainopinionimage1.png';
import brainopinionimage2 from './images/brainopinionimage2.png';
import brainopinionimage3 from './images/brainopinionimage3.png';

// write api methods to retrieve the specific information that a topics cards need quiz opinions etc
// when stem is clicked componentDidMount will fetch all relevant stem items
//when route changes in Page write function to update state and render new component in board based on state 
/* updateBoard (topic){
    this.setState(() => {
      return topic = topicApi.get(this.props.match.params)
      
    })
}
topicer = {this.props.match.params.section}
selectedTopic = TopicAPI.filter(topic => TopicAPI.topic === topicer)
*/

// const TopicAPI = {

// 	topics: [
// 		{
// 			topic:Stem,
// 			vidsource: 'https://youtu.be/Kz8LgAsUAgE',
// 			title: 'Stem Cells',
// 			img:Stem,
//       science: {
//         vidsource: ""
//       },
// 			opinion : {
// 		link:"standard-level/stem-cells/some-opinions",		
//   	board:{  
//               img: {
//                 im:stemcellopinionimage1,
//                 tag: "A pastor's opinion",
//                 text: "A 2 minute clip giving a religious perspective on the use of embryonic stem cells."
//                  },
//               img: {
//                 im:stemcellopinionimage2,
//                 tag: "A patient's opinion",
//                 text: "Watch this video 'Stem Cells - The Issue' which describes the use of stem cells in treating Parkinson's Disease."
//                   },
//               img: {
//                 im:stemcellopinionimage3,
//                 tag: "A wheelchair user's opinion",
//                 text: "A wheelchair user discusses his hopes and reservations about stem cell therapy in this 3-minute clip"
//                   }
//             }
//           },
//   	activities: {
//           img: {
//             im:stemcellactivity1,
//             tag: "Differentiation",
//             text: "READ through this BBC Bitesize learning module and click the WATCH link"
//              },
//           img: {
//             im:stemcellactivity2,
//             tag: "Research",
//             text: "EXPLORE the links to research stem cells from the University of Utah"
//               },
//           img: {
//             im:stemcellactivity3,
//             tag: "BBC News",
//             text: "WATCH and READ this news item from 2008 to find out about the four stages in a windpipe transplant"
//               },
//             },
// 	quiz:"",
// 	discussion: ""
// 		},
// 		{
// 			topic:'Genetic Engineering',
// 			vidsource: 'fZrL7h2aqZQ',
// 			title: 'Genetic Engineering',
// 			img:genes,
//       science: {
//         vidsource: ""
//       },
// 			opinion : {
// 		link:"standard-level/genes/some-opinions",
//   	board:{   
//               img: {
//                 im:genesopinionimage1,
//                 tag: "",
//                 text: ""
//                  },
//               img: {
//                 im:genesopinionimage2,
//                 tag: "",
//                 text: ""
//                   },
//               img: {
//                 im:genesopinionimage3,
//                 tag: "",
//                 text: ""
//                   }
                  
//             }
//           },
//     activities: {
//       img: {
//               im:geneactivityimage1,
//               tag: "",
//               text: ""
//                },
//       img: {
//               im:geneactivityimage2,
//               tag: "",
//               text: ""
//                 },
//       img: {
//               im:geneactivityimage3,
//               tag: "",
//               text: ""
//                 }
//         },
// 	quiz:"",
// 	discussion: ""
// 		},
// 		{
// 			topic:brain,
// 			vidsource: 'https://youtu.be/rt4J47lQT5Q',
// 			title: 'Brain Chemistry',
// 			img:brain,
//       science: {
//         vidsource: ""
//       },
// 			opinion : {
// 		link:"standard-level/brain/some-opinions",
//   	board:{   
//               img: {
//                 im:"",
//                 tag: "",
//                 text: ""
//                  },
//               img2: {
//                 im:"",
//                 tag: "",
//                 text: ""
//                   },
//               img3: {
//                 im:"",
//                 tag: "",
//                 text: ""
//                   }
                  
//             }
//           },
          
//     activities: {
//       img: {
//               im:"",
//               tag: "",
//               text: ""
//                },
//       img: {
//               im:"",
//               tag: "",
//               text: ""
//                 },
//       img: {
//               im:"",
//               tag: "",
//               text: ""
//                 }
//         },
// 	quiz:"",
// 	discussion: ""
// 		},
// 		{
// 			topic:vaccine,
// 			vidsource: 'https://youtu.be/Kz8LgAsUAgE*',
// 			title: 'Vaccinations',
// 			img:vaccine,
//       science: {
//         vidsource: ""
//       },
// 			opinion : {
// 		link:"standard-level/vaccine/some-opinions",
//   	board:{   
//               img: {
//                 im:"",
//                 tag: "",
//                 text: ""
//                  },
//               img2: {
//                 im:"",
//                 tag: "",
//                 text: ""
//                   },
//               img3: {
//                 im:"",
//                 tag: "",
//                 text: ""
//                   }
                  
//             }
//           },
//     activities: {
//       img: {
//               im:"",
//               tag: "",
//               text: ""
//                },
//       img: {
//               im:"",
//               tag: "",
//               text: ""
//                 },
//       img: {
//               im:"",
//               tag: "",
//               text: ""
//                 }
//         },
// 	quiz:"",
// 	discussion: ""
// 		},
// 		{
// 			topic:clinic,
// 			vidsource: 'https://youtu.be/Kz8LgAsUAgE*',
// 			title: 'Cinical Trials',
// 			img:clinic,
//       science: {
//         vidsource: ""
//       },
// 			opinion : {
// 		link:"standard-level/clinic/some-opinions",
//   	board:{ 
//               img: {
//                 im:"",
//                 tag: "",
//                 text: ""
//                  },
//               img2: {
//                 im:"",
//                 tag: "",
//                 text: ""
//                   },
//               img3: {
//                 im:"",
//                 tag: "",
//                 text: ""
//                   }
                  
//             }
//           },
//     activities: {
//       img: {
//               im:"",
//               tag: "",
//               text: ""
//                },
//       img: {
//               im:"",
//               tag: "",
//               text: ""
//                 },
//       img: {
//               im:"",
//               tag: "",
//               text: ""
//                 }
//         },
// 	quiz:"",
// 	discussion: ""
// 		},
// 		{
// 			topic:evolution,
// 			vidsource: 'https://youtu.be/Kz8LgAsUAgE',
// 			title: 'Evolution',
// 			img:evolution,
//       science: {
//         vidsource: ""
//       },
// 			opinion : {
// 		link:"standard-level/evolution/some-opinions",
//   	board:{  
//               img: {
//                 im:"",
//                 tag: "",
//                 text: ""
//                  },
//               img2: {
//                 im:"",
//                 tag: "",
//                 text: ""
//                   },
//               img3: {
//                 im:"",
//                 tag: "",
//                 text: ""
//                   }
                  
//             }
//           },
//   	activities: {
//   		img: {
//               im:"",
//               tag: "",
//               text: ""
//                },
//       img: {
//               im:"",
//               tag: "",
//               text: ""
//                 },
//       img: {
//               im:"",
//               tag: "",
//               text: ""
//                 }
// 				},
// 	quiz:"",
// 	discussion: ""
// 		},
// 		{
// 			topic:pgd,
// 			vidsource: 'https://youtu.be/Kz8LgAsUAgE',
// 			title: 'PGD',
// 			img:pgd,
//       science: {
//         vidsource: ""
//       },
// 			opinion : {
// 		link:"standard-level/pgd/some-opinions",
//   	board:{   
//               img: {
//                 im:"",
//                 tag: "",
//                 text: ""
//                  },
//               img: {
//                 im:"",
//                 tag: "",
//                 text: ""
//                   },
//               img: {
//                 im:"",
//                 tag: "",
//                 text: ""
//                   }
                  
//             }
//           },
//     activities: {
//       img: {
//               im:"",
//               tag: "",
//               text: ""
//                },
//       img: {
//               im:"",
//               tag: "",
//               text: ""
//                 },
//       img: {
//               im:"",
//               tag: "",
//               text: ""
//                 }
//         },
// 	quiz:"",
// 	discussion: ""
// 		}



// 	],
// 	all: function() {return TopicAPI.topics.toString()}, //json.stringify should help
// 	get: function(topic) {
// 		const isTopic = (t) => t.topic === topic
// 		return this.topics.find(isTopic)
// 	},
//   rec: function(top){
//     return TopicAPI.topics.filter((top)=> TopicAPI.topics.topic === top)
//   }

// }

// export default TopicAPI;

// /*fetch topic based on props.match.url.params
// this.setState props=== topic
// opinion = topic.opinion
// activities = topic.activites
// Reference in opinion function == props.opinion.img1
// opinion is going to map 3 bigcard components 
// */