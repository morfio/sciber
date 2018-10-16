// import React, { Component } from 'react';
// import Question from './Quest';
// import Question from './Question';
// import QuestionCount from './QuestionCount';
// import AnswerOption from 'AnswerOption';
import React, { Component} from 'react';
import Questions from './Questions';
import AnswerList from './AnswerList';
import Score from './Score';
import Progress from './Progress';
import './Quiz.css';


class Quiz extends React.Component {
	constructor(props){
		super(props);

			this.state = this.getInitialState();
			this.checkAnswer = this.checkAnswer.bind(this);
			this.resetQuiz = this.resetQuiz.bind(this);
	}

	getInitialState() {
		const quiz = this.props.questionData
		return {
			// questionData: [
   //              {question: "This is the capital of which country? Canberra", answers: ["Turkey","Australia","Cuba","Algeria"], correct: 1},
   //              {question: "This is the capital of which country? Bangkok", answers: ["Argentina","Thailand","India","United Kingdom"], correct: 1}],
   			 {quiz}
             progress: 0,
             score: 0
   				
		};
	}

	checkAnswer(index) {
		var correct = this.state.questionData[this.state.progress].correct;
		var newScore = 0, newProgress = 0;
		if (correct === index) {
			newScore = this.state.score + 1;
			this.setState({score: newScore});
			newProgress = this.state.progress + 1;
			this.setState({progress: newProgress});
		}else{
			newProgress = this.state.progress + 1;
			this.setState({progress: newProgress});
		}
	}

	resetQuiz(){
		this.setState({score: 0, progress: 0});
		//todo show links to other available quizes
	}

	render(){
		var currentQuestion = this.state.questionData[this.state.progress];
		if(this.state.questionData.length > this.state.progress) {
			return(
				<div className="quiz container">
					<Questions questionText={currentQuestion.question} />
					<AnswerList answers={currentQuestion.answers} answerCallback={this.checkAnswer} />
					<Score score={this.state.score} />
					<Progress progress={this.state.progress} total={this.state.questionData.length}/>
				</div>	
				);
			}else {
            return (
                <div className="quiz container">
                    <p className="quiz question">Quiz Finished!</p>
                    <Score score={this.state.score} />
                    <button type="button" className="quiz reset-btn" onClick={this.resetQuiz}>Reset Quiz</button>
                </div>
            );
        }
		}
	}

	export default Quiz;

// class Quiz extends Component {
// 	constructor(){
// 		super();

// 	}
// const Quiz = {
// 	"q1":{
// 		"text" : " What is a cell",
// 		"answers" : [
// 						 {"a": "The real",
// 						  "correct" : "false"},
// 						 {"b": "The unreal",
// 						  "correct" : "false"},
// 						 {"c": "Los huertas",
// 						  "correct" : "false"},
// 						 {"d": "The winner",
// 						  "correct" : "true"}
// 					]
// 		},
// 	"q2":{
// 		"text" : " What is a celler",
// 		"answers" : [
// 						 {"a": "The realer",
// 						  "correct" : "false"},
// 						 {"b": "The unrealer",
// 						  "correct" : "false"},
// 						 {"c": "Los huertaser",
// 						  "correct" : "false"},
// 						 {"d": "The winnerer",
// 						  "correct" : "true"}
// 					]
// 		}
// }

// const view = ({ Quiz}) =>
//     {
// 	  return (
// 				<div className = 'quiz' >
// 						{
// 							Quiz.map((num,index) =>
// 							{
// 								return(
// 									<Question className='loks'
// 										key={index}
// 										id={Quiz[index].id}
// 										text = {Quiz[index].text}
// 										a = {Quiz[index].answers[0].a}
// 										b = {Quiz[index].answers[1].b.value}
// 										c = {Quiz[index].answers[2].c.value}
// 										d = {Quiz[index].answers[3].d.value}
// 									/>
// 									)
// 							})
// 						}
// 				</div>
// 			);
// 	}	
// export default Quiz;	



