import React from 'react';
import { FaHtml5,FaCss3, FaJs, FaPython, FaPhp}from 'react-icons/fa';
import './CV.css';
const CV = () => {
return (
	<div className='CV'>

		
		<h1>My Tech</h1>
Software Engineering, 
Javascript,Typescript,React, React Native, NodeJS, 
Restful services, PostgreSQL, Python


<h1>SKILLS</h1>
<p>
<strong>Languages</strong>:<span><FaHtml5  style={{color:'orange' , fontSize: '1.5em'}}/>&nbsp;
<FaCss3 style={{color:'cyan', fontSize: '1.5em'}} />&nbsp;
<FaJs style={{color:'#f7df1e', fontSize: '1.5em'}} />&nbsp;
<FaPython style={{color:'#4584b6', fontSize: '1.5em'}} />&nbsp;
<FaPhp style={{color:'#8892be', fontSize: '1.5em'}} />&nbsp; 
</span> 
</p>
<p>
<strong>Web Development Technologies</strong>: React, React Native, Redux, Nodejs, Express, Restful services, GraphQL,
Django(beginner), Gatsby, Ruby on Rails(willing to learn), Jekyll(willing to learn).
</p>
<p>
<strong>Mobile Development</strong>: React Native (Android and iOS)
</p>
<p>
<strong>Databases</strong>: MySQL, PostgreSQL, MongoDB
</p>
<p>
<strong>Others</strong>: Heroku, Git, Continuous Delivery,Agile
</p>
<p>
<strong>Soft skills</strong>: Very Good at communication, Team player, Pragmatic, Independent, Fast Learner, Good Analytical Skills, Fluent in English
</p>
<p><strong>My Code_way</strong> : "Simplicity is the ultimate sophistication."
</p>
<p>Currently looking into Ai, Mobile Development, Web Development, Game Design, if you have Internships or junior level positions available in any of these fields contact me!</p>

<h1>EDUCATION</h1>
BA in Law Azad University in Tehran
,
Python Bible, Compelete Web Developer Javascript by Udemy

<h2>PROFESSIONAL EXPERIENCE </h2>
<div className='exp'>
<h3>PHP Backend Developer Intern at Mihanblockchain </h3>
<h4>April 2019-May 2019</h4>
<p className='mono'>
Focused on Backend Using PHP and MySQL,
Learning and implementing Php and Javascript
to create needed webpages.
Worked with wordpress and basic use of Solidity.
Developed an Interactive Dictionary webapp.
</p>
</div>
<div className='exp'>
<h3>Freelance Software engineer </h3>
<h4>Nov 2018 - Present</h4>
<p className='mono'>
Full-stack engineering on Frontend, Backend, 
Mobile using Javascript,React, React Native, NodeJS, PostgreSQL 
Mobile first and responsive Design
Strong understanding of startup needs.
see my projects for more insight into my work
</p>
</div>
<div className='exp'>
<h2>FX Officer at Hekmat Iranian Bank</h2>
<h3>May 2017 - Apr 2018</h3>
<p className='mono'>
Strong Ms Office Skills Detail-Oriented compliance for every transaction in order to fully uphold the laws and regulations set by Central Bank
Representing the Bank in Event and B2B Marketing to gain potential clients
Banking Swift Operator, transmitting Succesful payment orders and letter of credits
</p>
</div>
<p>&nbsp;</p>

</div>
	)
}
export default CV;