import React , { Component } from 'react';
import './popUp.css'
import ReactDOM from 'react-dom';
import { Modal } from 'react-responsive-modal';
import Help from './help';
import axios from 'axios';
class Share extends Component{
	state = {
		user_id:this.props.user_id,
		message:""
	};
	inputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	userRegistration() {
		axios.post("http://localhost:3000/story",{user_id:this.state.user_id,message:this.state.message})
		.then(response => {
			this.props.onOpenPopup(3)
		})
		.catch(error => {
			alert(`${error.message} authentication failed`);
		})
	}

	render(){
		return (
			<div>
      <div className="popupform">
  		<h2>Share your Experience</h2>
  		<p className="main-container1">Share Your Covid-19 experience and help the community fight this deadly virus better</p>
  		<textarea onChange={(val) => this.inputChange(val)} name="message" value={this.state.message} className="inputtext" placeholder="API/Key" ></textarea>
  		<button onClick={() => this.userRegistration()} className="buttonSubmitPopups" name="sendmessage">Let's Go!</button>
  		<a className="skip" onClick={(e) =>{this.props.onOpenPopup(3)}}>Skip ></a>
  	</div>
		</div>
			);
	}
}

export default Share
