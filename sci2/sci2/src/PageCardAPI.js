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
  	vidsource: 'https://youtu.be/fZrL7h2aqZQ',
  	title: 'Opinion',
  	img: opinionActive,
    topic:'Opinion'
  },
  {
  	id:3,
  	vidsource: 'https://youtu.be/rt4J47lQT5Q',
  	title: 'Brain Chemistry',
  	img:discussActive,
    topic:'Brain'
  },
  {
  	id:4,
  	vidsource: 'https://youtu.be/rt4J47lQT5Q',
  	title: 'Vaccinations',
  	img:theQuizActive,
    topic:'Vaccinations'
  },
  {
  	id:5,
  	vidsource: 'https://youtu.be/rt4J47lQT5Q',
  	title: 'Cinical Trials',
  	img:discussActive,
    topic:'Clinic'
  }
];

export default PCardList;