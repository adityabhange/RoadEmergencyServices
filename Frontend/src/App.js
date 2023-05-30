import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Register from "./Register";
import Login from "./Login";
import loginform from "./loginform";
import Contacts from "./Contact";

import ViewOption from "./ViewOption";

import Footer from "./Footer";
import Navbar from "./Navbar";
import AddAmbulance from "./AddAmbulance";
import BookingService from "./BookingService";
import Booking from "./Booking";
import Admin from "./Admin";
import userstab from "./userstab";
import { Switch,Routes, Route, Navigate, Redirect } from "react-router-dom";
import ViewAmbulance from "./ViewAmbulance";

const App = () => {
  
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Services} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/Login" component={loginform} />
        <Route exact path="/regLogin" component={Login} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/contact" component={Contacts} />
        <Route exact path="/select" component={ViewOption} />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/addambulance" component={AddAmbulance} />
        <Route exact path="/viewuser" component={userstab} />
        <Route exact path="/ViewAmbulance" component={ViewAmbulance} />


        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
