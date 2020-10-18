import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./../Components/authComponent/home";
import Contact from "./../Components/authComponent/contact";
import Main from "./../Components/authComponent/main";
import RegisterDonor from './../Components/unAuthComponent/Register/registerDonor';
import RegisterPatient from './../Components/unAuthComponent/Register/registerPatient';
import Faq from './../Components/authComponent/faq';
export default function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/contact"></Link>
            </li>
            <li>
              <Link to="/registerdonor"></Link>
            </li>
            <li>
              <Link to="/registerpatient"></Link>
            </li>
            <li>
              <Link to="/faq"></Link>
            </li>
            <li>
              <Link to="/main"></Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/main">
            <MainPage/>
          </Route>
          <Route path="/faq">
            <FaqPage/>
          </Route>
          <Route path="/registerdonor">
            <RegisterDonorPage/>
          </Route>
          <Route path="/registerpatient">
            <RegisterPatientPage/>
          </Route>e>
          <Route path="/contact">
            <ContactPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

function HomePage(){
  return <div><Home/></div>;
}
function ContactPage(){
  return <div><Contact/></div>;
}
function RegisterDonorPage(){
  return <div><RegisterDonor/></div>;
}
function RegisterPatientPage(){
  return <div><RegisterPatient/></div>;
}
function FaqPage(){
  return <div><Faq/></div>;
}
function MainPage(){
  return <div><Main/></div>;
}
