import React from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa';
import pic1 from './1.jpg';
import pic2 from './2.jpg';
import pic3 from './3.jpg';
import pic5 from './5.jpg';
import pic6 from './6.jpg';
import pic7 from './7.jpg';
import pic8 from './8.jpg';
import './Projects.css';
var slides =[pic1, pic2, pic3, pic5, pic6, pic7, pic8];
var slide = 0;
class Projects extends React.Component {
	onSlideChange = (drctn) =>{
		//var crntSlide = slides[slide];
		//alert(crntSlide);
		//document.getElementById('axa').src = crntSlide;
		//alert('src'+ document.getElementById('axa').getAttribute('src'));
		switch (drctn){
			case 0: slide++;  break;
			case 1: slide--; break;
			default: slide = 0;
		};
		if(slide < 0){
			slide= 6;
		}
		if (slide > 6){
			slide= 0;
		}
		document.getElementById('axa').src = slides[slide];
	}
	render(){
		return(

		<div className='projects'>
			<div> 
				<img id ='axa' src={slides[0]} alt="a" />
				<FaArrowCircleRight className='arrow fr' onClick={() => this.onSlideChange(0)}/>
				<FaArrowCircleLeft className='arrow fl' onClick={() => this.onSlideChange(1)}/>
			</div>
		</div>
		);
	}
}
export default Projects;