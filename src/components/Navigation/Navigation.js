import React from 'react';
import { faGithub, faStackOverflow, faLinkedin, faInstagram,faTelegram,faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navigation.css';
import { FaEnvelope } from 'react-icons/fa';

const Navigation = () =>{
	return(
		<div className='Navig'>
			<a 
				href='https://github.com/art1373'  
				target="_blank" 
				rel="noopener noreferrer" 
				title="My Github">
				<FontAwesomeIcon className='github' icon={faGithub} style={{fontSize:'1.5em'}}/>
			</a>&nbsp;&nbsp;
			<a 
				href='https://stackoverflow.com/users/11187413/alireza-tk'  
				target="_blank" 
				rel="noopener noreferrer" 
				title="Iam stackedoverflowed">&nbsp;
				<FontAwesomeIcon className='stack' icon={faStackOverflow} style={{fontSize:'1.5em'}}/>
			</a>&nbsp;&nbsp;&nbsp;  
			<a 
				href='https://www.linkedin.com/in/alireza-tavakol73/'  
				target="_blank" 
				rel="noopener noreferrer" 
				title="Me on Linkedin">
				<FontAwesomeIcon className='linkedin' icon={faLinkedin} style={{fontSize:'1.5em'}}/>
			</a>&nbsp;&nbsp;
			<a 
				href='https://www.instagram.com/its__art73/'  
				target="_blank" 
				rel="noopener noreferrer" 
				title="Inside my crazy life">
				<FontAwesomeIcon className='insta' icon={faInstagram} style={{fontSize:'1.5em'}}/>
			</a>&nbsp;&nbsp;
			<a 
				href='https://telegram.me/Alirezatkkk'  
				target="_blank" 
				rel="noopener noreferrer" 
				title="Telegram">
				<FontAwesomeIcon className='telegram' icon={faTelegram} style={{fontSize:'1.5em'}}/>
			</a>&nbsp;&nbsp;
			<a 
				href='https://mobile.twitter.com/Alireza46621909'  
				target="_blank" 
				rel="noopener noreferrer" 
				title="Hero tweets">
				<FontAwesomeIcon className='twitter' icon={faTwitter} style={{fontSize:'1.5em'}}/>
			</a>&nbsp;&nbsp;

			<a 
				href='mailto:alirezatk73@gmail.com'  
				target="_blank" 
				rel="noopener noreferrer" 
				title="email me">
				<FaEnvelope className='gmail' />
			</a>&nbsp;&nbsp;
	
		</div>
	);
}


export default Navigation;