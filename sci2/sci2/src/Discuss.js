import React from 'react';
import './Discuss.css';



const Discuss = () => {

	return(
			<div className='discussMain'>
				<ul className='discussList'>
					<li className='under'>
						<div className='dropdown'>
							<p>
								Student led discussion
							</p>
							<div className='dropdown-content'>
								<ol>
									<li>Find some people to have a discussion with (4 – 8 is perfect)</li>
									<li>Go back to 'some opinions' and pick an opinion to discuss</li>
									<li>Come up with some open-ended questions and vote on which question would be the most interesting to discuss</li>
									<li>Start off by getting one person to ensure everyone is clear about the question and another to say why they think it is interesting</li>
									<li>Take turns to discuss your views and try to follow on from what was said before.</li>
								</ol>
							</div>
						</div>
					</li>
					<li className='under'>
						<div className='dropdown'>
							<p>
								Teacher led discussion
							</p>
							<div className='dropdown-content'>
								<article>
									<span>Study the 'some opinions' section and come up with 10 questions about the topic. Try to include some open-ended questions (without a definite right or wrong answer).</span>
									<span>Bring your questions to the next lesson</span>
								</article>
							</div>
						</div>
					</li>
					<li className='under'>
						<div className='dropdown'>
							<p>
								How to use SciberBrain
							</p>
							<div className='dropdown-content'>
								<p>
									Online discussion Coming soon!!
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			);
}	
 export default Discuss;