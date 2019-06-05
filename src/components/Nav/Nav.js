import React from 'react';
import './Nav.css'

const Nav = ({ onRouteChange }) => {
	return (
		<nav className='nav'>
			<label onClick={() => onRouteChange(0)}><u>About</u></label>
			<label onClick={() => onRouteChange(1)}><u>CV</u></label>
		</nav>
	);
}





export default Nav;


