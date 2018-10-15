import brain from './images/BrainChemistry-active.gif';
import opinionActive from './images/Opinions-active.gif';
import activitiesActive from './images/activities-active.gif';
import theQuizActive from './images/activities-inactive.gif';
import discussActive from './images/discuss-active.gif';

export const PCardList = [
  {
  	id:1,
  	title: 'Science',
  	img:brain,
    topic:'Science'
    
  },
  {
  	id:2,
  	title: 'Opinion',
  	img: opinionActive,
    topic:'Opinion'
  },
  {
  	id:3,
  	title: 'Activities',
  	img:discussActive,
    topic:'Activities'
  },
  {
  	id:4,
  	title: 'Quiz',
  	img:theQuizActive,
    topic:'Quiz'
  },
  {
  	id:5,
  	title: 'Discussion',
  	img:discussActive,
    topic:'Discussion'
  }
];

export default PCardList;