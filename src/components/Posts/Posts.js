import React from 'react';
import './Posts.css';
import {faReact} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Posts = () => {
	return (
		<div className="posts">
			<h2>Hey There! My name is Alireza TK</h2>
			<p>
				I'm a Full-stack Developer living in <b>Iran&nbsp;</b>
				<img alt='iran' src={require('./iran.png')} style={{width:'30px'}}/>
			</p>

			<p>My favorite platforms are Reactjs, Gatsby, 
				ReactNative for Front end and Python Django and Nodejs combined with Expressjs for backend.
			</p>
			<p>
				I also enjoy working with Flask and Rails as well. 
				You can have a chat with me over my social medias on top of the screen. 
				Don't be afraid to say Hi.
			</p>
			<footer>Designed With React <FontAwesomeIcon className='react' icon={faReact} style={{fontSize:'2em'}}/></footer>
		</div>
	);
}
export default Posts;