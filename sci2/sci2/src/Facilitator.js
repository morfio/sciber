import React from 'react';
import {Link} from 'react-router-dom';
import './Facilitator.css';
import Navigation from './Navigation';
// import Footer from './Footer';

export const FacHeader = () => {
	return (
		<div className="facilities">
			<span className="wideHead"><p className='headWide'>Facilitators</p></span>
			<ul className='facNav'>
				<li><Link to='/Facilitator/Public'>Public Engagement</Link></li>
				<li><Link to='/Facilitator/Curriculum'>Curriculum Links</Link></li>
				<li><Link to='/Facilitator/Lesson'>Lesson Plans</Link></li>
			</ul>

		</div>
		);
}
export const Public = () => {
	return (
		<div className='facilities'>
			<ul><li className='under'>
				<div className='dropdown'>
					<p className='topHeader'>Planning an event</p>
					<div className='dropdown-content'>
						<p>There are a number of parameters which need to be considered when planning your public engagement event</p>
						<p><strong>Outcomes</strong> - What outcomes do you envisage for your audience? Why are these outcomes important?</p>
						<p><strong>Ability</strong> - How much prior knowledge will your audience have? Can you make any assumptions about background/cultures?</p>
						<p><strong>Venue</strong> - Will you have a projector? Is seating fixed? Can participants move around freely? Will a risk assessment / CRB check be required?</p>
						<p><strong>Timings</strong> - How long would you like with your audience? How long will you have? Are they captive or passing through?</p>
						<p><strong>Number of participants</strong> - Can you predict how may people will come? Can you adapt for fewer/more participants than you expect?</p>
						<p><strong>Resources</strong> - Each SciberBrain topic provides 'Some science', 'Some opinions'and a 'Quiz' on a selection of controversial issues. Check through each section to see if any of these resources are appropriate for your audience/outcomes</p>
						<p>Once you have considered these parameters, have a look at the events suggested below...</p>
					</div>
				</div></li>
				<li className='under'>
				<div className='dropdown'>
					<p className='topHeader'>1-2 hour discussion event (10 - 25 participants)</p>
					<ul className='dropdown-content'>
						<li>
							<strong>  Provide a knowledge base (10 mins)</strong>
							<div>Select the ability of your audience -STANDARD (for audiences with no prior knowledge) and Advanced (post-16 audiences with some prior knowledge). /
							  The first section for each topic provides 'Some science'. This is an animated slide-show which provides information on:
							</div>
							<ol>
								<li>Technical details of the process and key concepts</li>
								<li>What scientists are able to do now</li>
								<li>What scientists hope to be able to do in the future. </li>
							</ol>
							<p>Project this to your audience as an introduction</p>
						</li>
						<li>
							<strong> Create an atmosphere (5 mins)</strong>
							<div>
								<p>Where possible, arrange seating in a circle with no desks or tables in between so that all participants, including yourself, can see and hear everyone else clearly. Upon arrival, explain to the group that the room is arranged this way to enable dialogue between them. Starters can be useful to get everyone in the group engaged and /
								contributing. Some help with collaboration, connecting concepts and analysing. Here are some you might like to try: </p>
							</div>
							<ol>
								<li>Collective Sentence: Make a sentence using one word each in turn. Start by modelling a 10-word sentence with a partner, using 1 word each alternately./
								 Then put students into pairs and have each pair make a 10-word sentence. Then go for a full circle.</li>
								<li>All Sit Down: Without gestures, words or sequences, all sit, one at a time. Two at the same time?
								 Stand up and try again! Ask for help in how we might make it work better.</li>
								<li>Eye-Contact Shuffle: Have everyone look around at eye level. If someone meets the gaze of someone else, they swap places.</li>
							</ol>
							<p></p>
						</li>
						<li>
							<strong> Present a stimulus (5 – 10 mins) </strong>
							<div>
								<p>
									To generate thinking about the implications of a scientific or technological development, it is useful to provide a thought-provoking stimulus. A stimulus can take virtually any form, but short video clips and news reports are particularly good. Try to locate something that can be presented in a few minutes.
									You will find some examples of stimuli in the ‘Some opinions’ sections for each of SciberBrain topics. 
								</p>
							</div>
						</li>
						<li>
							<strong> Generate questions (15 mins) </strong>
							<div>
								<p>
									Arrange participants into small teams to brainstorm questions raised by the science and provoked by the stimulus. After 5 minutes, ask each team to select one open-ended question to ‘pitch’ to the whole class.
									After the questions have been ‘aired’, everyone votes for which one they would like to discuss en mass.
								</p>
							</div>
						</li>
						<li>
							<strong> Facilitate a discussion (15 - 20 mins)</strong>
							<div>
								<p>
									Begin the dialogue by asking the group that came up with the question to share how they came to it. Invite other members of that group to comment. Next, invite others students in the circle to respond. Perhaps ask them to try to answer the question, give their opinion or add to what has been said. Your role as dialogue facilitator is to start and keep the dialogue progressing.
								    Facilitating dialogue takes skill and practice, but here are some of the basics of managing dialogue effectively:   
								</p>
							</div>
							<ol>
								<li>Do allow time for thoughtful responses.</li>
								<li>Do model careful and respectful listening.</li>
								<li>Do show open-mindedness and interest.</li>
								<li>Don’t use evaluative language like 'good' or 'correct'.</li>
								<li>Don’t provide your own answers, beliefs or interpretations.</li>
								<li>Don’t allow monologues or 'duologues' to dominate.</li>
							</ol>
							<p></p>
						</li>
						<li>
							<strong>  Summing up (5 mins) </strong>
							<div>
								<p>
									Finish off by having a round of ‘last words’, where each person in turn has a chance to say a few words without reply. At this point, participants might like to sum up their thoughts,
									give considered opinions, say if they have changed their minds or voice further questions.
								</p>
								<p>
									This <a href=''>8 page PDF</a>has more details on the dialogue facilitation stages above
								</p>
							</div>
							<ol></ol>
							<p></p>
						</li>
					</ul>
				</div></li>
				<li className='under'>
				<div className='dropdown'>
					<p className='topHeader'>1-2 hour lecture-style event(larger groups of 25+ participants) </p>
					<ul className='dropdown-content'>
						<li>
							<div>
								<p><strong>Provide a knowledge base (10 mins) </strong></p>
								<div>
									<p>Select the ability of your audience -STANDARD (for audiences with no prior knowledge) and Advanced (post-16 audiences with some prior knowledge).  
									 The first section for each topic provides 'Some science'. This is an animated slide-show which provides information on: </p>
								</div>
								<ol>
									<li>Technical details of the process and key concepts </li>
									<li>What scientists are able to do now</li>
									<li>What scientists hope to be able to do in the future. Project this to your audience as an introduction</li>
								</ol>
								<p>
									Project this to your audience as an introduction
								</p>
							</div>
							
						</li>
						<li>
							<div>
								<p><strong>Present a stimulus (5 – 10 mins) </strong></p>
								<div>
									<p>To generate thinking about the implications of a scientific or technological development, it is useful to provide a thought-provoking stimulus. A stimulus can take virtually any form, but short video clips and news reports are particularly good. Try to locate something that can be presented in a few minutes. 
									You will find some examples of stimuli in the ‘Some opinions’ sections for each of SciberBrain topics. </p>
								</div>
								
							</div>
							
						</li>
						<li>
							<div>
								<p><strong>Generate questions (10 mins) </strong></p>
								<div>
									<p>Ask participants (in pairs) to brainstorm questions raised by the science and provoked by the stimulus.
									 After 2-3 minutes, ask for suggestions of open-ended question for the whole group to discuss. Ask members of the audience to make a case for their favorite question.
									 Once the questions have been 'aired', have a vote for which one they would like to discuss en mass.</p>
								</div>
								
							</div>
							
						</li>
						<li>
							<div>
								<p><strong>Facilitate a panel discussion (15 - 20 mins) </strong></p>
								<div>
									<p>Appoint 6-10 'judges' who voted to discuss the issue, they will form the on-stage panel. 
									Also appoint 4 helpers and dot them about the audience with microphones (or balloons to act as 'a conch'). 
									Begin the dialogue by asking the group that came up with the question to share how they came to it. 
									Next, invite someone in the panel to respond, then invite others to respond. 
									Perhaps ask them to try to answer the question, give their opinion or add to what has been said. 
									Your role as dialogue facilitator is to start and keep the dialogue progressing. 
									Facilitating dialogue takes skill and practice, but here are some of the basics of managing dialogue effectively:</p>
								</div>
								<ol>
									<li>Do allow time for thoughtful responses. </li>
									<li>Do model careful and respectful listening.</li>
									<li>Do show open-mindedness and interest.</li>
									<li>Don’t use evaluative language like 'good' or 'correct'. </li>
									<li>Don’t provide your own answers, beliefs or interpretations.</li>
									<li>Don’t allow monologues or 'duologues' to dominate.</li>
								</ol>
							</div>
							
						</li>
						<li>
							<div>
								<p><strong>Summing up (5 mins)  </strong></p>
								<div>
									<p>Finish off by having a round of ‘last words’ from the panel of 'judges', where each judge in turn has a chance to say a few words without reply. 
										At this point, participants might like to sum up their thoughts, give considered opinions, 
										say if they have changed their minds or voice further questions.  
									</p>
									<p>
									This <a href=''>8 page PDF</a>has more details on tips for dialogue facilitation
									</p>
								</div>
							</div>
							
						</li>
						
					</ul>
				</div>
				</li>
			</ul>
		</div>
		)
}
export const Curriculum = () => {
	return(
		<div className="facilities">
			<ul>
			<li className='under'>
				<div className='dropdown'>
					<p className='topHeader'>AQA Biology AS/A2</p>
					<p className='topHeader'><a href=''>Open PDF</a> showing how SciberBrain topics link to AQA</p>
				</div>
			</li>
			<li className='under'>	
				<div className='dropdown'>
					<p className='topHeader'>Edexcel Biology AS/A2</p>
					<p className='topHeader'><a href=''>Open PDF</a> showing how SciberBrain topics link to Edexcel</p>
				</div>
			</li>
			<li className='under'>
				<div className='dropdown'>
					<p className='topHeader'>OCR Biology AS/A2</p>
					<p className='topHeader'><a href=''>Open PDF</a> showing how SciberBrain topics link to OCR</p>
				</div>
			</li>
			</ul>
		</div>

		)
}


export const Lesson = () => {

	return (
		<div className="facilities">
			<div className='he1 dropdown '>
				<div>
					<p className='topHeader'>Preparation</p>
					<div className='dropdown-content'><p>Each SciberBrain topic provides 'Some science','Some opinions','Some activities'
						appl and a 'Quiz'.  Check through each section to ensure the activities are appropriate for your learners.
						</p>

						<p>If possible, ask students to prepare for a discussion by exploring your chosen topic on www.sciberbrain.org for homework or in a preparation  lesson.</p> 

						<p>Suggested timings and activities for a class discussion lesson are set out below (or print out the handbook for more details).</p>
					</div>
				</div>
			</div>
				<ol className='llist'> 
				  <li className='under'>
				    <div className='he2 dropdown '>
						<p className='topHeader'>	Provide a knowledge base (10 - 30 mins)</p>
						<div className='dropdown-content'>
								<p>The first section for each topic provides 'Some science'. 

								This is an animated slide-show which provides information on: 

								-  Technical details of the process and key concepts 

								- What scientists are able to do now 

								- What scientists hope to be able to do in the future.

								Project this to your class as an introduction or revision. Students can explore other sections of the topic if they haven't already done so and if you have time.
								</p>
						</div>
				    </div>
				  </li>
				  <li className='under'>
						<div className='he3 dropdown '>
							<p className='topHeader'>
								Create an atmosphere (5 mins)
							</p>
							<div className='dropdown-content'>
								<p>Where possible, arrange seating in a circle with no desks or tables in between so that all participants, including yourself, can see and hear everyone else clearly. Upon arrival, explain to the students that the room is arranged this way to enable dialogue between them. Starters can be useful to get everyone in the group engaged and contributing. Some help students get into collaborating, some into connecting concepts or analysing. Here are some you might like to try:  </p>

								<p>- Collective Sentence: Make a sentence using one word each in turn. Start by modelling a 10-word sentence with a partner, using 1 word each alternately. Then put students into pairs and have each pair make a 10-word sentence. Then go for a full circle. </p> 

								<p>- All Sit Down: Without gestures, words or sequences, all sit, one at a time. Two at the same time? Stand up and try again! Ask for help in how we might make it work better.</p> 

								<p>- Eye-Contact Shuffle: Have everyone look around at eye level. If someone meets the gaze of someone else, they swap places.</p>
							</div>
						</div>
				  </li>
				  <li className='under'>
					<div className='he4 dropdown'>
						<p className='topHeader'>
								Present a stimulus (5 – 10 mins)
						</p>
						<div className='dropdown-content'>
							<p>To generate thinking about the implications of a scientific or technological development, it is useful to provide a thought-provoking stimulus. A stimulus can take virtually any form, but short video clips and news reports are particularly good. Try to locate something that can be presented in a few minutes. You will find some examples of stimuli in the ‘Some opinions’ sections for each of SciberBrain topics.
							</p>
						</div>
					</div>
				  </li>
				  <li className='under'>
						<div className='he5 dropdown'>
							<p className='topHeader'>
								Generate questions (15 mins)
							</p>
							<div className='dropdown-content'>
								<p>Arrange students into small teams to brainstorm questions raised by the science and provoked by the stimulus. After 5 minutes, ask each team to select one open-ended question to ‘pitch’ to the whole class. After the questions have been ‘aired’, everyone votes for which one they would like to discuss as a class.
								</p>
							</div>

						</div>
				  </li>
				  <li className='under'>
						<div className='he6 dropdown'>
							<p className='topHeader'>
								Facilitate a discussion (15 - 20 mins)
							</p>
							<div className='dropdown-content'>
								<p>Begin the dialogue by asking the group that came up with the question to share
								 how they came to it. Invite other members of that group to comment. Next, invite 
								 others students in the circle to respond. Perhaps ask them to try to answer the question,
								  give their opinion or add to what has been said. Your role as dialogue facilitator is to 
								  start and keep the dialogue progressing. Facilitating dialogue takes skill and practice, 
								  but here are some of the basics of managing dialogue effectively:</p>   

								<span>- Do allow time for thoughtful responses.   

								- Do model careful and respectful listening.    

								- Do show open-mindedness and interest.       

								- Don’t use evaluative language like 'good' or 'correct'.   

								- Don’t provide your own answers, beliefs or interpretations.   

								- Don’t allow monologues or 'duologues' to dominate.
								</span>
							</div>
						</div>
			      </li>
				  <li className='under'>
						<div className='he7 dropdown'>
							<p className='topHeader'>
								Summing up (5 mins).
							</p>
							<div className='dropdown-content'>
								<p>Finish off by having a round of ‘last words’, where each person in 
								turn has a chance to say a few words without reply.At this point, 
								students might like to sum up their thoughts, give considered opinions, 
								say if they’ve changed their minds or voice further question.
								</p>
							</div>
						</div>
				  </li>
				</ol>
				<ul className='endlist'>
				  <li className='under'>
					   <div className='he8 dropdown'>
					     <p className='topHeader'>
							Downloadable handbook
					     </p>
					   	 <div className='dropdown-content'>
						This 8 page PDF has more details on the 5 dialogue facilitation stages above.
					     </div>
					   </div>
					
				  </li>
			    </ul>
				
		</div>
		)
}

export const Facilitator = () => {
	return(
		<div className='faccontainer'>
			
			<div className='courselinks'>
				<div className='toplinks'>
					<span><a href='home'>Home</a></span> <span> / </span>
					<span><a href='Facilitators'>Facilitator</a></span>
				</div>
				<div className='facil'><h3>Facilitator</h3></div>
			</div>
			<div className='Facilitator'>
			  	<div className='buttons'>buttons</div>
			</div>
		</div>
	       )
};

