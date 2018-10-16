import React from 'react';
import footicons from './images/footerlogos.gif';
import quest from './images/qusetionmark.gif';
import biochem from './images/biochemicalLogo.gif';
import './Footer.css';

const Footer = () => {
	return(
		<div className='footer grid-container--fit'>
			<div className='1 tj'><p><h6>Copyright 2009-18 The Biochemical Society</h6></p></div>
			<div className='2 tj'><a href='#'><h6>Privacy Policy</h6></a></div>
			<div className='4 tj'><a href='#'><h6>Disclaimer</h6></a></div>
			<div className='5 tj'><img src={biochem}/></div>	
		</div>

		)
}

export default Footer;