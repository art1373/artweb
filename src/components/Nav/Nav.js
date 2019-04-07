import React from 'react';
//import { faHome} from "@fortawesome/free-solid-svg-icons";
//import { faInstagram} from "@fortawesome/free-brands-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Nav.css'

const Nav = ({onRouteChange}) =>{
	return(
//<FontAwesomeIcon className='text-warning' icon={faHome} style={{color:'cyan',fontSize:'2em'}}/>
		<nav className='nav'>
			<label onClick={() => onRouteChange(0)}><u>About</u></label> 
			<label onClick={() => onRouteChange(1)}><u>CV</u></label> 
			<label onClick={() => onRouteChange(2)}><u>Contact Me</u></label> 
		</nav>
	);
}





export default Nav;


