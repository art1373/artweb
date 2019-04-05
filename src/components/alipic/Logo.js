import React from 'react';
import Pic from './axam.jpg';
import './Logo.css';
import Tilt from 'react-tilt';
const Logo = () => {
	return(
		<div className='circle' >
			<Tilt className="logo" options={{ max : 25 ,transition:     true}} >
			 <div className="Tilt-inner "><img alt="aliax" src={Pic} className='logo' /></div>
			</Tilt>
		</div>
	);
}

export default Logo;