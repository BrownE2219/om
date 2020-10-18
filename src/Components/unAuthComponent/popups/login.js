import React , { Component } from 'react';
import './popUp.css'
import Glogin from './../../../googleAuth';
import { Modal } from 'react-responsive-modal';
import Forget from './forget';
import Button from './button';
import Share from './share';
import axios from 'axios';
import { withRouter } from 'react-router';

class Login extends Component{
	state = {
		isDonor: true,
		email:"",
		password:""
	};

asPatientorDonor = (val) => {
	this.setState({isDonor:val})
}
inputChange = (e) => {
	this.setState({
		[e.target.name]: e.target.value
	})
}

userRegistration() {
	axios.post("http://localhost:3000/login",{email:this.state.email,password:this.state.password})
	.then(response => {
		this.props.changeUser_id(response.data._id);
		this.props.onOpenPopup(5);
		alert(`You have sucessfully loged in with: ${this.state.email} mail id`);

	})
	.catch(error => {
		console.log(error);
		alert(`${error} authentication failed`);
	})
}

	render(){
		return (
			<div>
      			<div className="popupform">
    			<ul>
    				<li className="patient"><h2 onClick={()=>this.asPatientorDonor(false)} className={!this.state.isDonor? "line":""}>PATIENT</h2></li>
    				<li className="donor"><h2  onClick={()=>this.asPatientorDonor(true)} className={this.state.isDonor? "line":""}>DONOR</h2></li>
    			</ul>
				<div className="google">
    		<Glogin/>
				</div>
          		<div className="vl">
            		<span className="vl-innertext">or</span>
          		</div>
    		<div className="title1">
    			<label className="labelemail" htmlFor="exampleInputEmail">Email Address</label><br/>
    		</div>
				<input type="email" className="inputEmail"  aria-describedby="emailHelp" onChange={(val) => this.inputChange(val)} name="email" value={this.state.email} placeholder="omasati34654@gmail.com"/>
				<div className="title1">
    			<label className="labelpassword" htmlFor="password">Password</label><br/>
    		</div>
				<input type="password" className="inputPasswordPopups" onChange={(val) => this.inputChange(val)} name="password" value={this.state.password} placeholder="123@Om"/>
    		<div className="forgot"><div className="new" name="forgot" onClick={(e) =>{this.props.onOpenPopup(2)}}>Forgot Password?</div></div>
    		<button className="buttonSubmitPopups" name="submit" onClick={() => this.userRegistration()}>Submit</button>
    		<div onClick={() => console.log(this.props)} className="newtocure">
    		New to CureStrings? Register <div className="new" onClick={(e) =>{this.props.onOpenPopup(1)}}>(Patient/Donor)</div>
    		</div>
    	</div>
			</div>
			);
	}
}

export default withRouter(Login)
