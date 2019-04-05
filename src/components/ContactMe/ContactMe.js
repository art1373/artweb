import React from 'react';
import './ContactMe.css';
import axios from 'axios';




class ContactForm extends React.Component{
	constructor (props) {
		super(props);
		this.state={
			name: '',
			email: '',
			msg:'',
			mailSent: false,
  			error: null


		}
	}

	handleFormSubmit = e => {
		e.preventDefault();
		  axios({
		    method: 'post',
		    url: 'http://localhost/artweb/contact.php',
		    headers: { 'content-type': 'application/json' },
		    data: this.state
		  })
		    .then(result => {
		      this.setState({
		        mailSent: result.data.sent
		      })
		    })
		    .catch(error => this.setState({ error: error.message }));
		};

	render(){
		return(
		<div>
			<div className='contactform'>
				<div>
				<label>Name</label><br />
				<input 
					type='text' 
					size='50' 
					placeholder='your name'
					onChange={e => this.setState({ name: e.target.value })}
				/>
				</div>
				<div>
				<label>E-mail</label><br />
				<input 
					type='email' 
					size='50' 
					placeholder='example@domain.com'
					onChange={e => this.setState({ email: e.target.value })}
				/>
				</div>
				<div>
				<label>Messege</label><br />
				<textarea 
					rows='10' 
					placeholder='Write your messege here'
					onChange={e => this.setState({ msg: e.target.value })}
				></textarea>
				</div>
				<div className='btndiv '>
				<input
					type="submit"
					className='btn'
					value='submit'
					onClick={e=> this.handleFormSubmit(e)}

				/>
				</div>
			</div>
				<div>
	  			{this.state.mailSent &&
				<div>Thank you for contcting me I will get Back to you ASAP.</div>
				 }
				</div>

				<p> &nbsp; </p>


			</div>
		)
	}

}

export default ContactForm;

