import React, { Component } from "react";
import "./contact.css";
import Header from "./../../header";
import Footer from "./../../footer";

class Contact extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="banner1">
          <div className="banner1-text">
            <h1>Reach Our Team</h1>
            <h4>
              We love questions and feedback - and we're always happy to help!
            </h4>
            <h4>Here are some ways to contact us.</h4>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="container">
              <h1>Send Us a Message</h1>
              <p>Send us a message and we'll respond in 24 hours</p>
              <form action="" className="contactForm">
                <label htmlFor="name">Name</label>
                <input
                  className="inputContect"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
                <label htmlFor="mobile-number">Mobile Number</label>
                <input
                  className="inputContect"
                  type="number"
                  id="mobile-number"
                  name="mobile-number"
                  placeholder="Your Mobile Number"
                />
                <label htmlFor="email">Email</label>
                <input
                  className="inputContect"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                />
                <label htmlFor="message">Message</label>
                <textarea
                  className="inputContect"
                  id="message"
                  name="message"
                  row="8"
                />
                <input
                  className="inputContectSubmit"
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
          </div>
          <div className="col1">
            <div className="container1">
              <h1>HeadQuarter</h1>
              <h3>New Delhi , India </h3>
              <p className="text">
                <i className="fasC fa fa-map-marker"></i>Room no. 567, Radhakrishnan
                Bhawan , IIT Roorkee{" "}
              </p>
              <p className="text">
                <i className="fasC fa fa-call">&#xf095;</i>+91-911-722-7202
              </p>
              <div className="social">
                <a href="/">
                  <i className="fasC fa fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fasC fa fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fasC fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Contact;
