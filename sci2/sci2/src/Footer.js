import React from 'react';
import footicons from './images/footerlogos.gif';
import quest from './images/qusetionmark.gif';
import biochem from './images/biochemicalLogo.gif';
import './Footer.css';

const Footer = () => {
	return(
		<div className='footer grid-container--fit'>
			<div className='1 tj'><p>Copyright 2009-18 The Biochemical Society</p></div>
			<div className='2 tj'><a href='#'>Privacy Policy</a></div>
			<div className='4 tj'><a href='#'>Disclaimer</a></div>
			<div className='5 tj'><img src={biochem}/></div>	
		</div>

		)
}

export default Footer;