import React , { Component } from 'react';
import './popUp.css'

class Help extends Component{
	render(){
		return (
			<div>
      <form className="popupform">
    		<h2>Help us Help them</h2>
    		<p className="main-container1">6474 could not be saved but 2450696 can be, Donate Now!
    			  virus better<br/>#ConnectingVeins</p>
    		<textarea name="text_input_help" className="inputtext" placeholder="API/Key"></textarea>
    		<button className="buttonSubmitPopups" type="submit" name="submit">DONATE NOW</button>
    		<a className="skip" href="/main">Skip ></a>
    	</form>
			</div>


			);
	}
}

export default Help
