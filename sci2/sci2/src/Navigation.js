import React from 'react';
import Logo from './images/sciberbrainLogo.png';
import Imtext from './images/sciberbraintext.gif';
import './Navigation.css'

import Button from './Button';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

const Navigation = () => {

	return (
		<div className='navheader'>
			
				
				<Link to='/' className='logo'><img className='logo' src={Logo} /></Link>
				<img className='logtext' src={Imtext} />
				
				<div className='headText'><p>Helping students make informed judgements about 
				controversial aspects of science</p></div>
				
			    <div className='nav'>
				    <span className='Home lift '>
				      <NavLink className='Home ' activeClassName="active"  to="/"><p className='white'>Home</p></NavLink>      
				    </span>
				    <span className='Stand lift white'>
				    <NavLink activeClassName="active"  to="/Standard"><p className='white'>Standard</p></NavLink>
				    </span>
				    <span className='Advanced lift white'>
				    <NavLink activeClassName="active"  to="/Advanced"><p className='white'>Advanced</p></NavLink>
				    </span>
				    <span className='Facilitators lift white'>
				    <NavLink activeClassName="active"  to="/Facilitator"><p className='white'>Facilitators</p></NavLink>
				    </span>
				    <span className='About lift white'>
				    <NavLink activeClassName="active"  to="/About"><p className='white'>About</p></NavLink>
				    </span>
				</div>
			<div className='navros'></div>
				
				
			
			
		</div>	
		)
}

 export default Navigation;