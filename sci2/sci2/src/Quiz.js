import React, { Component } from 'react';
import Question from './Quest';
const Quiz = {
	"q1":{
		"text" : " What is a cell",
		"answers" : [
						 {"a": "The real",
						  "correct" : "false"},
						 {"b": "The unreal",
						  "correct" : "false"},
						 {"c": "Los huertas",
						  "correct" : "false"},
						 {"d": "The winner",
						  "correct" : "true"}
					]
		},
	"q2":{
		"text" : " What is a celler",
		"answers" : [
						 {"a": "The realer",
						  "correct" : "false"},
						 {"b": "The unrealer",
						  "correct" : "false"},
						 {"c": "Los huertaser",
						  "correct" : "false"},
						 {"d": "The winnerer",
						  "correct" : "true"}
					]
		}
}

const view = ({ Quiz}) =>
    {
	  return (
				<div className = 'quiz' >
						{
							Quiz.map((num,index) =>
							{
								return(
									<Question className='loks'
										key={index}
										id={Quiz[index].id}
										text = {Quiz[index].text}
										a = {Quiz[index].answers[0].a}
										b = {Quiz[index].answers[1].b.value}
										c = {Quiz[index].answers[2].c.value}
										d = {Quiz[index].answers[3].d.value}
									/>
									)
							})
						}
				</div>
			);
	}	
export default Quiz;	



