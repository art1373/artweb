import React from 'react';
import './Footer.css';

const footerWidth = window.innerWidth;
var width = (footerWidth <= 360) ? 86 : 50;
var perWidth = {width: width + '%'};


const Footer = () =>{
	return(
		<div className='footer' style={perWidth}>
		<p>©Alireza TK 2018-2019</p>
		</div>
	);
}





export default Footer;
