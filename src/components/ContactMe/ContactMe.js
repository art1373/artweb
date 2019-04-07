import React from 'react';
import './ContactMe.css';
//import axios from 'axios';




class ContactForm extends React.Component{
	constructor (props) {
		super(props);
		this.state={
			name: '',
			email: '',
			msg:'',
			msgSent: false,
  			error: null,

		}
	}

	handleFormSubmit = () => {
		fetch('http://localhost:3001/savemsg',	{
		   	method: 'post',
		   	headers: {
		   		'Accept': 'application/json, text/plain, */*',
			    'Content-Type':'application/json',
		   		'Access-Control-Allow-Origin':'*',
		   	},
		   	body: JSON.stringify({
				"name": this.state.name,
		    	"email": this.state.email,
		    	"msg": this.state.msg
   			})
  		})
  		.then(response => response.json())
    	.then(msgid => {
      		this.setState({msgSent: true})
    	})
	}

	handleFormClear = () => {
		
		document.getElementById('name').value='';
		document.getElementById('email').value='';
		document.getElementById('msg').value='';
		this.setState({
			name: '',
			email: '',
			msg: ''
		})
	}

	render(){
		return(
		<div>
			<div className='contactform'>
				<div>
				<label>Name</label><br />
				<input 
					id='name'
					type='text' 
					size='50' 
					placeholder='your name'
					onChange={event => this.setState({ name: event.target.value })}
				/>
				</div>
				<div>
				<label>E-mail</label><br />
				<input id='email'
					type='email' 
					size='50' 
					placeholder='example@domain.com'
					onChange={event => this.setState({ email: event.target.value })}
				/>
				</div>
				<div>
				<label>Messege</label><br />
				<textarea 
					id='msg'
					rows='10' 
					placeholder='Write your messege here'
					onChange={event => this.setState({ msg: event.target.value })}
				></textarea>
				</div>
				<div className='btndiv '>
				<button
					className='btn'
					onClick={this.handleFormSubmit}
				>Submit</button>
				<button
					className='btnclear'
					onClick={this.handleFormClear}

				>Clear</button>
				</div>
				
			</div>
				<div className='msgsent'>
	  			{this.state.msgSent &&
				<div>Thank you for contcting me I will get Back to you ASAP.</div>
				 }
				</div>

				<p> &nbsp; </p>


			</div>

		)
	}

}

export default ContactForm;

