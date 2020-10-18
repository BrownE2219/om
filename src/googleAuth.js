import React , { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { withRouter } from 'react-router';
import axios from 'axios';
class GoogleAuth extends Component{
  responseGoogle=(response)=>{
    console.log(response.profileObj.googleId);
    if(response.profileObj.googleId !== null){
      console.log(response.profileObj.email);
      axios.post("http://localhost:3000/login",{email:response.profileObj.email})
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
  }
	render(){
		return (
			<div>
      <GoogleLogin
      clientId="589906672085-qh0jlb4c0k83d0k9gns4aieuddbn12uk.apps.googleusercontent.com"
      buttonText="SignIn"
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}/>
      </div>
			);
	}
}

export default withRouter(GoogleAuth)
