import React , { Component } from 'react';
import { withRouter } from "react-router-dom";
import './popUp.css';

class Buttons extends Component{
	render(){
		return (
			<div>
				<p>Register as-</p>
    		<button className="chooseButtonDonor" onClick={event => window.location.href="/registerdonor"} type="button">Donor</button>
    		<button className="chooseButtonPatient" onClick={event => window.location.href="/registerpatient"} type="button" >PATIENT</button>
			</div>
			);
	}
}

export default withRouter(Buttons)
