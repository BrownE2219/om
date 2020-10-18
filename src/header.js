import React, { Component } from "react";
import "./header.css";
import { Modal } from 'react-responsive-modal';
import TemporaryDrawer from "./navigationDrawer";
import Button from "./Components/unAuthComponent/popups/button";
import Login from "./Components/unAuthComponent/popups/login";
import Share from "./Components/unAuthComponent/popups/share";
import Forget from "./Components/unAuthComponent/popups/forget";
import Help from "./Components/unAuthComponent/popups/help";
import logo from "./logo.svg";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      openPopup:0,
      user_id:"",
      open: false
    };
  }
  changeUser_id = (e) => {
    this.setState({user_id:e});
  }
  onOpenPopup = (e) => {
    this.setState({openPopup:e});
  }

  openDrawer = (e) => {
    this.setState({ open: true });
  };

  closeDrawer = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <div className="header">
          <a  href="/"className="logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="header-right">
            <button className="active" onClick={() => {this.onOpenPopup(4)}}>
              Log In
            </button>
            <button className="active" onClick={() => {this.onOpenPopup(1)}}>
              Register
            </button>
            <div className="dropdown" onClick={(e) => this.openDrawer(true)}>
              <button className="dropbtn">
                <i className="fa bars">&#xf0c9;</i>
              </button>
            </div>
          </div>
        </div>

        {this.state.open && <TemporaryDrawer />}
        <Modal open={this.state.openPopup === 1} onClose={(e) =>this.onOpenPopup(0)} center>
          <Button/>
        </Modal>

        <Modal open={this.state.openPopup === 2} onClose={(e) =>this.onOpenPopup(0)} center>
          <Forget/>
        </Modal>

        <Modal open={this.state.openPopup === 3} onClose={(e) =>this.onOpenPopup(0)} center>
          <Help/>
        </Modal>

        <Modal open={this.state.openPopup === 4} onClose={(e) =>this.onOpenPopup(0)} center>
          <Login onOpenPopup={this.onOpenPopup.bind(this)} changeUser_id={this.changeUser_id.bind(this)}/>
        </Modal>

        <Modal open={this.state.openPopup === 5} onClose={(e) =>this.onOpenPopup(0)} center>
          <Share onOpenPopup={this.onOpenPopup.bind(this)} user_id ={this.state.user_id}/>
        </Modal>
      </div>
    );
  }
}

export default Header;
