import Stem from './images/stemCells_off.gif';
import genes from './images/Genetic_Engineering_off.gif';
import clinic from './images/ClinicalTrials_off.gif';
import vaccine from './images/Vaccinations_off.gif';
import brain from './images/Brain_Chemistry_off.gif';
import evolution from './images/Evolution_off.gif';
import pgd from './images/pgd_off.gif';


const TopicA = [
//correct structure for api
  
    {
      "topic":Stem,
      "vidsource": 'https://youtu.be/Kz8LgAsUAgE',
      "title": 'Stem Cells',
      "img":Stem,
      "science": {
        vidsource: ""
                },
      "opinion": {
        
        "link":"standard-level/stem-cells/some-opinions",   
        "board":[  
                  {
                    im:"",
                    tag: "A pastor's opinion",
                    text: "A 2 minute clip giving a religious perspective on the use of embryonic stem cells."
                     },
                  {
                    im:"",
                    tag: "A patient's opinion",
                    text: "Watch this video 'Stem Cells - The Issue' which describes the use of stem cells in treating Parkinson's Disease."
                      },
                  {
                    im:"",
                    tag: "A wheelchair user's opinion",
                    text: "A wheelchair user discusses his hopes and reservations about stem cell therapy in this 3-minute clip"
                      }
                ]
              },
              
    "activities": [
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
                ],
  "quiz":"",
  "discussion": ""
    }
    ],

const topicer = TopicA[0].opinion.board[1].text;
    console.log(topicer);

export default TopicA;

   /*const selectedTopic = TopicAPI.filter(function(top){
    return 
   })
   (topic => TopicAPI.topic === stem)*/