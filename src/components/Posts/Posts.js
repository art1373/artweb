import React from 'react';
import './Posts.css';
import {faReact} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Posts = () => {
	return (
		<div className="posts">
			<h2>Hey There! My name is Alireza Tavakol</h2>
			<p>
				I'm a Front-end Developer and A Designer living in <b>Iran&nbsp;</b>
				<img alt='iran' src={require('./iran.png')} style={{width:'30px'}}/>
			</p>

			<p>My favorite platforms are Reactjs, Angular, 
				for Front-end Development. <br />
				I Also do Ui/Ux Design.
			</p>
			<p>
				You can Reach me through social Media preferebly Linkedin.
			</p>
			<footer>Designed With React <FontAwesomeIcon className='react' icon={faReact} style={{fontSize:'3em'}}/></footer>
		</div>
	);
}
export default Posts;