import React , { Component } from 'react';
import './registerpatient.css';
import { withRouter } from 'react-router';
import Header from './../../../header'
import Footer from './../../../footer'
import axios from 'axios';

class Patient extends Component{

	constructor(props){
		super(props)
	  this.state={
	    name: "",
	    email: "",
	    mobileNumber: "",
	    password: "",
	    bloodGroup: "",
	    age: "",
	    gender: "",
	    city: "",
	    pinCode: "",
	    haveReport:"yes",
	    reportData:"",
	    isDonor:true
	  };
	}

	inputChange = (e) => {
	  this.setState({
	    [e.target.name]: e.target.value
	  })
	}
	userRegistration() {
	  console.log(this.state);
	  axios.post("http://localhost:3000/signup",this.state)
	  .then(response => {
			this.props.history.push("/");
	    console.log(response);
	    alert(`You have sucessfully created account with ${this.state.email} mail id now you can login`);
	  })
	  .catch(error => {
			console.log(error);
	    alert(`${error} user already exist with this email id`);
	  })
	}
	render(){
		return (
			<div>
				<Header />
				<div className="form-card">
					<form className="patientform">
						<h1 className="patienth1"> Do You need Plasma?</h1>
						<label>Name</label><br/>
						<input type="text" className="inputs" onChange={(val) => this.inputChange(val)} name="name" value={this.state.name} placeholder="Om"/>
						<label>Email</label><br/>
						<input type="email" className="inputs" onChange={(val) => this.inputChange(val)} name="email" value={this.state.email} placeholder="omasati34654@gmail.com"/>
						<label>Password</label>
						<input type="password" className="inputs" onChange={(val) => this.inputChange(val)} name="password" value={this.state.password} placeholder="123@Om"/>
						<label>Mobile Number</label><br/>
						<input type="tel" className="inputs" onChange={(val) => this.inputChange(val)} name="mobileNumber" value={this.state.mobileNumber} placeholder="919340012238"/>
						<table>
            <tbody>
            <tr>
            <td className="labeltd"><label type="select" >Blood Group</label></td>
            <td className="inputtd"><input list="bloodgroup"  className="tableinputs" onChange={(val) => this.inputChange(val)} name="bloodGroup" value={this.state.bloodGroup} placeholder="B,B+"/></td>
            </tr>
            <tr>
            <td className="labeltd"><label className="aglabel">Age</label></td>
            <td className="inputtd"><input className="tableinputs" onChange={(val) => this.inputChange(val)} name="age" value={this.state.age} placeholder="19"/></td>
            </tr>
            <tr>
            <td className="labeltd"><label className="gnlabel">Gender</label></td>
            <td className="inputtd"><input className="tableinputs" onChange={(val) => this.inputChange(val)} name="gender" value={this.state.gender} list="gender" placeholder="Male/Female"/></td>
            </tr>
            <tr>
            <td className="labeltd"><label className="clabel">City</label><br/></td>
            <td className="inputtd">  <input className="tableinputs" onChange={(val) => this.inputChange(val)} name="city" value={this.state.city} placeholder="Delhi"/></td>
            </tr>
            <tr>
            <td className="labeltd"><label className="pclabel">Pincode</label></td>
            <td className="inputtd"><input className="tableinputs" onChange={(val) => this.inputChange(val)} name="pinCode" value={this.state.pinCode} placeholder="132458"/></td>
            </tr>
            </tbody>
            </table>
							<label>Do you have a laboratory confirmed diagnosis of Covid-19?</label>
							<p className="patientyesp">
								<label>
								<input
                  type="radio"
                  value="yes"
                  name="haveReport"
                  checked={this.state.haveReport === "yes"}
                  onChange={(val) => this.inputChange(val)}
                />
								<span>Yes</span>
								</label>
							</p>
								<p className="patientnop">
	                <label>
	                <input
	                  type="radio"
	                  value="no"
	                  name="haveReport"
	                  checked={this.state.haveReport === "no"}
	                  onChange={(val) => this.inputChange(val)}
	                />
								<span>No</span>
								</label>
							</p>
							<label className="reportdatedonor">If yes, what is the date of report?</label>
							<input className="inputs" type="date"  name="reportData" onChange={(val) => this.inputChange(val)} value={this.state.reportData}/>
							<p className="patienttc"> <input type="checkbox"/>  Terms and Conditions</p>
							<button className="patientbutton" type="button" onClick={() => this.userRegistration()} >REGISTER NOW</button>
							<div className="notaPatient">
								Not a Patient <a className="std" href="/registerdonor">(Switch to Donor)</a>
							</div>
								<datalist id="bloodgroup">
									<option value="A+"/>
									<option value="A-"/>
									<option value="B+"/>
									<option value="B-"/>
									<option value="AB-"/>
									<option value="AB+"/>
									<option value="O+"/>
									<option value="O-"/>
								</datalist>
								<datalist id="gender">
									<option value="Male"/>
									<option value="Female"/>
									<option value="Other"/>
								</datalist>
				</form>
				</div>
				<Footer/>
			</div>
			);
	}
}

export default withRouter(Patient)
