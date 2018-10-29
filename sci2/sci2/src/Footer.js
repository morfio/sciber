import React from 'react';
import { Link, Route } from 'react-router-dom';
import footicons from './images/footerlogos.gif';
import quest from './images/qusetionmark.gif';
import biochem from './images/biochemicalLogo.gif';
import './Footer.css';

const Footer = () => {
	return(
		<div className='footer grid-container--fit'>
			<div className='1 tj'><p><h6>Copyright 2009-18 The Biochemical Society</h6></p></div>
			<div className='2 tj'><a href='http://www.biochemistry.org/AboutUs/Contactus/Privacystatement.aspx'><h6>Privacy Policy</h6></a></div>
			<div className='4 tj'><Link to='/Disclaimer'>Disclaimer</Link></div>
			
		</div>

		)
}

export default Footer;

//<div className='5 tj'><img className='biochemLogo' src={biochem}/></div>	