import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';



const About = () => {

	return(
			<div className='aboutMain'>

				<span className="wideHead"><p className='headWide'>About</p></span>
				<ul className='aboutList'>
					<li className='under'>
						<div className='dropdown'>
							<p className='topHeader'>
								How to use SciberBrain
							</p>
							<div className='dropdown-content'>
								<p>
									SciberBrain is a collection of free resources for addressing controversial aspects of Genetic engineering, Stem cells, Vaccinations, Evolution, Clinical trials and Brain chemistry. <br /><br />

									Resources have been differentiated for two ability levels: Standard (KS3/4) and NEW Advanced (post-16). Resources include background science presentations, dialogue stimuli, videos and quizzes which have been selected by teachers and scientists from a range of sources. <br /><br />

									Step 1: Select the topic you would like your students/audience to discuss  <br /><br />

									Step 2: Show the background science presentation to your class/audience <br /><br />

									Step 3: Get students/participants to explore the interactive links and opinions <br /> <br />

									Step 4: Have an informed class/group discussion <br /><br />

									See the <Link to="/Facilitators">Facilitators</Link> section for lesson plans, event ideas and dialogue facilitation tips 
								</p>
							</div>
						</div>
					</li>
					<li className='under'><div className='dropdown'>
							<p  className='topHeader'>
								About the project
							</p>
							<div className='dropdown-content'>
								<div>
									<ul>
										<li>This website is a collection of resources for addressing controversies surrounding science</li><br />
										<li>Designed for secondary school students and public audiences</li><br />
										<li>Differentiated for two ability levels</li><br />
										<li>For supporting class discussions, cross-curricular events and for public engagement</li><br />
										<li>Differentiated for two ability levels</li><br />
										<li>Created by teachers and scientists to ensure that the content is up-to-date, relevant, accurate and as balanced as possible</li><br />
								    </ul>
								</div>
							</div>
						</div></li>
					<li className='under'><div className='dropdown'>
							<p  className='topHeader'>
								About us
							</p>
							<div className='dropdown-content'>
								<p>
									The Biochemical Society is a UK based  Learned Society for the advancement of biochemistry. The major charitable objective of 
									the Society is to promote biochemistry in a variety of educational contexts.<br /> We seek to inspire the next generation of young 
									bioscientists and promote a better understanding of the key biological challenges faced by citizens of the future.<br /> The Society
									also fulfills its charitable mission through scientific conferences, publications, grant schemes and career events, many of which
									are resourced by our membership.<br /><br />
									Other online resources from the Biochemical Society include:<br /><br />
									The<a href="http://essays.biochemistry.org/content/59"> Understanding Biochemistry</a> issues 
									of Essays in Biochemistry provide up to date overviews of key concepts in biochemistry.<br/><br />
								    For more information about the Society's
									activities for schools, please see:<a href="http://www.biochemistry.org/education/"> www.biochemistry.org/education/</a> <br/><br />
									SciberBrain was originally sponsored by the Monsanto Fund <a href="http://www.monsantofund.org/"> http://www.monsantofund.org</a>
									   			
								</p>
							</div>
						</div></li>
					<li className='under'><div className='dropdown'>
							<p className='topHeader'>
								Contact us
							</p>
							<div className='dropdown-content'>
								<p>
									Education department 

									email: <a href="mailto:education@biochemistry.org">education@biochemistry.org</a><br /><br />
									The Biochemical Society <br />
									Charles Darwin House <br />
									12 Roger Street <br />
									London, WC1N 2JU <br />
									UK <br />
									Tel: +44 (0)20 7685 2452 <br /> <br />


									<a href="http://www.biochemistry.org/education/">www.biochemistry.org/education</a>
								</p>
							</div>
						</div></li>
					<li className='under'><div className='dropdown'>
							<p className='topHeader'>
								Feedback
							</p>
							<div className='dropdown-content'>
								<p>
									Feedback
									We would be very grateful to hear about your experiences of using SciberBrain resources to help us improve our website. <br />
									If you can send us a picture of your SciberBrain events, we will send you some freebies!<br />
									To comment on any resources, experiences or if you have any ideas to help us make this resource more useful, please email <a href="mailto:education@biochemistry.org">education@biochemistry.org</a>
								</p>
							</div>
						</div></li>
					
				</ul>
			</div>
				
		)
}
export default About;

// <li className='under'><div className='dropdown'>
// 							<p className='topHeader'>
// 								Acknowledgements
// 							</p>
// 							<div className='dropdown-content'>
// 								<p>
									
// 								</p>
// 							</div>
// 						</div></li>