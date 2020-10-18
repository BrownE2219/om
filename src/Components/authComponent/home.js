import React, { Component } from "react";
import "./home.css";
import Header from "./../../header";
import Footer from "./../../footer";
import 'react-responsive-modal/styles.css';

class Home extends Component {
  /*	  state = {
    open: true,
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };
  */

  render() {
    //const { open } = this.state;
    return (
      <div>
        <Header />

        <div className="banner">
          <div className="banner-text">
            <h1>Connecting Lives to Cure Aliments</h1>
            <br />
            <br />
            <h3>Recovered from COVID?</h3>
            <br />
            <h1>Share Your Journey</h1>
            <br />
            <h1>Donate Plasma - Be the Change </h1>
          </div>
        </div>

        <div className="work">
          <h1 className="abc">How It Works?</h1>
          <p>Take these simple steps and become our partner</p>
          <div className="column">
            <div className="card">
              <div className="cir">
                <div className="circle">01</div>
              </div>
              <div className="circle-text">
                <b>Come</b>
              </div>
              <br />
              <div className="card-text">
                <p>
                  Register yourself as a <b>Donor</b> or <b>Patient </b>by
                  providing few key details.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="cir">
                <div className="circle">02</div>
              </div>
              <div className="circle-text">
                <b>Find</b>
              </div>
              <br />
              <div className="card-text">
                <p>
                  Share your geolocation to find nearest available plasma donor
                  or be the change by donating plasma.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="cir">
                <div className="circle">03</div>
              </div>
              <div className="circle-text">
                <b>Connect</b>
              </div>
              <br />
              <div className="card-text">
                <p>
                  Get to know their experiences and reach out to plasma donors.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column-button">
          <button className="donor-button">Become Donor</button>
          <button className="patient-button">Patient</button>
        </div>
        <hr className="horizontal" />
        <br />

        <div className="exp">
          <h1>Their COVID stories!</h1>
          <div className="exp-col">
            <div className="column">
              <div className="card">
                <div className="card-img">
                  <img src="./../../logo1.jpg" alt=" " />
                </div>
                <div className="card-text">
                  <p>
                    React elements are immutable. Once you create an element,
                    you can’t change its children or attributes. An element is
                    like a single frame in a movie: it represents the UI at a
                    certain point in time.
                  </p>
                </div>
                <hr className="horizontal" />
                <div className="detail">
                  <p className="detail-name">
                    <b>Shubham</b>
                  </p>
                  <p className="detail-email">shinetooutshine@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-img">
                  <img src="./../../logo1.jpg" alt=" " />
                </div>
                <div className="card-text">
                  <p>
                    React elements are immutable. Once you create an element,
                    you can’t change its children or attributes. An element is
                    like a single frame in a movie: it represents the UI at a
                    certain point in time.
                  </p>
                </div>
                <hr className="horizontal" />
                <div className="detail">
                  <p className="detail-name">
                    <b>Shubham</b>
                  </p>
                  <p className="detail-email">shinetooutshine@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-img">
                  <img src="./../../logo1.jpg" alt=" " />
                </div>
                <div className="card-text">
                  <p>
                    React elements are immutable. Once you create an element,
                    you can’t change its children or attributes. An element is
                    like a single frame in a movie: it represents the UI at a
                    certain point in time.
                  </p>
                </div>
                <hr className="horizontal" />
                <div className="detail">
                  <p className="detail-name">
                    <b>Shubham</b>
                  </p>
                  <p className="detail-email">shinetooutshine@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
