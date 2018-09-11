import Stem from './images/stemCells_off.gif';
import genes from './images/Genetic_Engineering_off.gif';
import clinic from './images/ClinicalTrials_off.gif';
import vaccine from './images/Vaccinations_off.gif';
import brain from './images/Brain_Chemistry_off.gif';
import evolution from './images/Evolution_off.gif';
import pgd from './images/pgd_off.gif';
import opinionActive from './images/Opinions-active.gif';
import opinionInactive from './images/Opinions-inactive.gif';
import activitiesActive from './images/activities-active.gif';
import activitiesInactive from './images/activities-inactive.gif';
import theQuizActive from './images/activities-inactive.gif';
import theQuizInactive from './images/theQuiz-inactive.gif';
//import theQuizActive from './discuss-inactive.gif';
import discussActive from './images/discuss-active.gif';

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

const TopicAPI = {

	topics: [
		{
			topic:Stem,
			vidsource: 'https://youtu.be/Kz8LgAsUAgE',
			title: 'Stem Cells',
			img:Stem,
      science: {
        vidsource: ""
      },
			opinion : {
		link:"standard-level/stem-cells/some-opinions",		
  	board:{  
              img: {
                im:"",
                tag: "A pastor's opinion",
                text: "A 2 minute clip giving a religious perspective on the use of embryonic stem cells."
                 },
              img: {
                im:"",
                tag: "A patient's opinion",
                text: "Watch this video 'Stem Cells - The Issue' which describes the use of stem cells in treating Parkinson's Disease."
                  },
              img: {
                im:"",
                tag: "A wheelchair user's opinion",
                text: "A wheelchair user discusses his hopes and reservations about stem cell therapy in this 3-minute clip"
                  }
            }
          },
  	activities: {
          img: {
            im:"",
            tag: "Differentiation",
            text: "READ through this BBC Bitesize learning module and click the WATCH link"
             },
          img: {
            im:"",
            tag: "Research",
            text: "EXPLORE the links to research stem cells from the University of Utah"
              },
          img: {
            im:"",
            tag: "BBC News",
            text: "WATCH and READ this news item from 2008 to find out about the four stages in a windpipe transplant"
              },
            },
	quiz:"",
	discussion: ""
		},
		{
			topic:genes,
			vidsource: 'https://youtu.be/fZrL7h2aqZQ',
			title: 'Genetic Engineering',
			img:genes,
      science: {
        vidsource: ""
      },
			opinion : {
		link:"standard-level/genes/some-opinions",
  	board:{   
              img: {
                im:"",
                tag: "",
                text: ""
                 },
              img: {
                im:"",
                tag: "",
                text: ""
                  },
              img: {
                im:"",
                tag: "",
                text: ""
                  }
                  
            }
          },
    activities: {
      img: {
              im:"",
              tag: "",
              text: ""
               },
      img: {
              im:"",
              tag: "",
              text: ""
                },
      img: {
              im:"",
              tag: "",
              text: ""
                }
        },
	quiz:"",
	discussion: ""
		},
		{
			topic:brain,
			vidsource: 'https://youtu.be/rt4J47lQT5Q',
			title: 'Brain Chemistry',
			img:brain,
      science: {
        vidsource: ""
      },
			opinion : {
		link:"standard-level/brain/some-opinions",
  	board:{   
              img: {
                im:"",
                tag: "",
                text: ""
                 },
              img2: {
                im:"",
                tag: "",
                text: ""
                  },
              img3: {
                im:"",
                tag: "",
                text: ""
                  }
                  
            }
          },
          
    activities: {
      img: {
              im:"",
              tag: "",
              text: ""
               },
      img: {
              im:"",
              tag: "",
              text: ""
                },
      img: {
              im:"",
              tag: "",
              text: ""
                }
        },
	quiz:"",
	discussion: ""
		},
		{
			topic:vaccine,
			vidsource: 'https://youtu.be/Kz8LgAsUAgE*',
			title: 'Vaccinations',
			img:vaccine,
      science: {
        vidsource: ""
      },
			opinion : {
		link:"standard-level/vaccine/some-opinions",
  	board:{   
              img: {
                im:"",
                tag: "",
                text: ""
                 },
              img2: {
                im:"",
                tag: "",
                text: ""
                  },
              img3: {
                im:"",
                tag: "",
                text: ""
                  }
                  
            }
          },
    activities: {
      img: {
              im:"",
              tag: "",
              text: ""
               },
      img: {
              im:"",
              tag: "",
              text: ""
                },
      img: {
              im:"",
              tag: "",
              text: ""
                }
        },
	quiz:"",
	discussion: ""
		},
		{
			topic:clinic,
			vidsource: 'https://youtu.be/Kz8LgAsUAgE*',
			title: 'Cinical Trials',
			img:clinic,
      science: {
        vidsource: ""
      },
			opinion : {
		link:"standard-level/clinic/some-opinions",
  	board:{ 
              img: {
                im:"",
                tag: "",
                text: ""
                 },
              img2: {
                im:"",
                tag: "",
                text: ""
                  },
              img3: {
                im:"",
                tag: "",
                text: ""
                  }
                  
            }
          },
    activities: {
      img: {
              im:"",
              tag: "",
              text: ""
               },
      img: {
              im:"",
              tag: "",
              text: ""
                },
      img: {
              im:"",
              tag: "",
              text: ""
                }
        },
	quiz:"",
	discussion: ""
		},
		{
			topic:evolution,
			vidsource: 'https://youtu.be/Kz8LgAsUAgE',
			title: 'Evolution',
			img:evolution,
      science: {
        vidsource: ""
      },
			opinion : {
		link:"standard-level/evolution/some-opinions",
  	board:{  
              img: {
                im:"",
                tag: "",
                text: ""
                 },
              img2: {
                im:"",
                tag: "",
                text: ""
                  },
              img3: {
                im:"",
                tag: "",
                text: ""
                  }
                  
            }
          },
  	activities: {
  		img: {
              im:"",
              tag: "",
              text: ""
               },
      img: {
              im:"",
              tag: "",
              text: ""
                },
      img: {
              im:"",
              tag: "",
              text: ""
                }
				},
	quiz:"",
	discussion: ""
		},
		{
			topic:pgd,
			vidsource: 'https://youtu.be/Kz8LgAsUAgE',
			title: 'PGD',
			img:pgd,
      science: {
        vidsource: ""
      },
			opinion : {
		link:"standard-level/pgd/some-opinions",
  	board:{   
              img: {
                im:"",
                tag: "",
                text: ""
                 },
              img: {
                im:"",
                tag: "",
                text: ""
                  },
              img: {
                im:"",
                tag: "",
                text: ""
                  }
                  
            }
          },
    activities: {
      img: {
              im:"",
              tag: "",
              text: ""
               },
      img: {
              im:"",
              tag: "",
              text: ""
                },
      img: {
              im:"",
              tag: "",
              text: ""
                }
        },
	quiz:"",
	discussion: ""
		}



	],
	all: function() {return TopicAPI.topics.toString()}, //json.stringify should help
	get: function(topic) {
		const isTopic = (t) => t.topic === topic
		return this.topics.find(isTopic)
	},
  rec: function(top){
    return TopicAPI.topics.filter((top)=> TopicAPI.topics.topic === top)
  }

}

export default TopicAPI;

/*fetch topic based on props.match.url.params
this.setState props=== topic
opinion = topic.opinion
activities = topic.activites
Reference in opinion function == props.opinion.img1
opinion is going to map 3 bigcard components 
*/