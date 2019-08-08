import React from "react";
import { FaHtml5, FaCss3, FaJs, FaPython, FaPhp } from "react-icons/fa";
import PS from "./photoshop.svg";
import XD from "./xd.svg";
import "./CV.css";
const CV = () => {
  return (
    <div className="CV">
		<h1>About Me</h1>
		<p>
		My passion in gaming and new Technologies aswell as an inspriation from my father who is also a developer, Led me to change career from law to programming.
		it was a hard journey and at my mid 20s many considered it risky but so far that is the best choice I made in my life to enter this world.
		I extremly learn and adapt fast and quickly everybody notice my improvment. I am a true team-player, at my current company everybody ask my opinion about their part of the job although they are
		senior than me. I also consider their guides and hints of as a piece of career improvment and always maintain a good and professional relationship with everyone.
		I like to work in a cool and creative team where creativity and discovery overlaps fast and routine delivery. and challanges are always make me excited.
		</p>
      <h1>SKILLS</h1>
      <p>
        <strong>Languages</strong>:
        <span>
          <FaHtml5 style={{ color: "orange", fontSize: "1.5em" }} />
          &nbsp;
          <FaCss3 style={{ color: "cyan", fontSize: "1.5em" }} />
          &nbsp;
          <FaJs style={{ color: "#f7df1e", fontSize: "1.5em" }} />
          &nbsp;
          <FaPython style={{ color: "#4584b6", fontSize: "1.5em" }} />
          &nbsp;
          <FaPhp style={{ color: "#8892be", fontSize: "1.5em" }} />
          &nbsp;
        </span>
      </p>

      <p>
        <strong>Web Development Technologies</strong>: React, Angular, Redux,
        GraphQL,Restful services, Familiar with Nodejs, Express, Ruby on
        Rails(willing to learn)
      </p>

      <p>
        <strong>Design Tools</strong>:
        <span>
          <img className="design" src={PS} alt="ps" />
          <img className="design1" src={XD} alt="ps" />
        </span>
        <div className="design" />
      </p>

      <p>
        <strong>Databases</strong>: MySQL, PostgreSQL
      </p>

      <p>
        <strong>Others</strong>: Heroku, Git
      </p>

      <p>
        <strong>Soft skills</strong>: Very Good at communication, Team player,
        Fast Learner, Good Analytical Skills,Debugging and Problem-solving,
        Fluent in English
      </p>
      <h1>EDUCATION</h1>
      BA in Law Azad University in Tehran , Python Bible, Compelete Web
      Developer Javascript by Udemy
      <h2>PROFESSIONAL EXPERIENCE </h2>
	  
      <div className="exp">
        <h3>Front-End Developer at Utab </h3>
        <h4>May 2019-Present</h4>
        <p className="mono">
          Focused on Front-end Development Using Angular Framework, Learning and
          implementing Ui/UX Designs. to create needed webpages for an
          E-commerce Project Www.Ufarm.ir, Focused on mobile-first and
          responsive design. Succesful Debugging of 5 major components just 1
          month into my intership. Transition to Junior Developer a month after
          Joining.
        </p>
      </div>

      <div className="exp">
        <h3>QA Tester(Remote) at TechClass Oy </h3>
        <h4>May 2019-July2019</h4>
        <p className="mono">
          Working with a E-learning Platfrom based on Helsinki,Finland with a
          Scrum methodology development. Design and Developed Detailed and
          complex Test cases to ensure Quality both Technical and Business
          Quality which increased bug fixing by 30% in development delivery.
          Ensured practical communication with the Design and Development team
          to ensure 100% integration of UI/UX with the Final Release. Using both
          Jmeter and Azure load test for load test and automation testing which
          led to succesfull delivery of testing of behind schedule plans.
        </p>
      </div>
      <div className="exp">
        <h2>FX Officer at Hekmat Iranian Bank</h2>
        <h3>May 2017 - Apr 2018</h3>
        <p className="mono">
          Strong Ms Office Skills Detail-Oriented compliance for every
          transaction in order to fully uphold the laws and regulations set by
          Central Bank Representing the Bank in Event and B2B Marketing to gain
          potential clients Banking Swift Operator, transmitting Succesful
          payment orders and letter of credits
        </p>
      </div>
      <p>&nbsp;</p>
    </div>
  );
};
export default CV;
