import React from 'react';
import Logo from './images/sciberbrainLogo.png';
import Imtext from './images/sciberbraintext.gif';
import './Navigation.css'

import Button from './Button';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

const Navigation = () => {

	return (
		<div className='navheader'>
			
				
				<img className='logo' src={Logo} />
				<img className='logtext' src={Imtext} />
				
				<div className='headText'><p><h6>Helping students make informed judgements about 
				controversial aspects of science</h6></p></div>
				
			    <div className='nav'>
				    <span className='Home lift'>
				      <NavLink className='Home ' activeClassName="active"  to="/">Home</NavLink>      
				    </span>
				    <span className='Stand lift'>
				    <NavLink activeClassName="active"  to="/Standard">Standard</NavLink>
				    </span>
				    <span className='Advanced lift'>
				    <NavLink activeClassName="active"  to="/Advanced">Advanced</NavLink>
				    </span>
				    <span className='Facilitators lift'>
				    <NavLink activeClassName="active"  to="/Facilitator">Facilitators</NavLink>
				    </span>
				    <span className='About lift'>
				    <NavLink activeClassName="active"  to="/About">About</NavLink>
				    </span>
				</div>
			<div className='navros'></div>
				
				
			
			
		</div>	
		)
}

 export default Navigation;