
import {Route, Link, Routes, useLocation} from 'react-router-dom';
import React, { useState } from "react";
import { useGeolocated } from "react-geolocated";
import { Redirect } from "react-router-dom";

import BookingService from './BookingService';

const Booking = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    ambulance:"",
    feature:"",
    vehicleNO:"",
    driver: "",
    driver_phone:"",
    status:"NOT AVAILABLE",
    latitude: "",
    longitude:"",

  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    let user = {name: data.fullname, phone: data.phone, email: data.email, ambulance: data.ambulance,
        feature: data.feature, vehicleNO:data.vehicleNO,driver:data.driver,driver_phone:data.driver_phone,status:data.status,latitude: data.latitude, longitude: data.longitude};
    BookingService.addBooking(user).then( res=>{
        this.state.successmsg = res.data;
        console.log(res.data);
        Redirect('/');
    });

    alert(
      `Booking Successfully`
    );
  };
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
) : coords ?
   (
  
    <form onSubmit={formSubmit}>
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
        <div className="my-5">
        <h1 className="text-center">Booking Here</h1>
      </div>
          <div class="mb-3 my-4">
            <label for="exampleFormControlInput1" class="form-label ">
              Your Location :
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Your Location"
            />
          </div>
          
          <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile Number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

          
          <br />
          <p>Nearest Ambulance Selected (Tap to view or change)</p>
          <select class="form-select" aria-label="Default select example">
            <option selected>SCHIC Medical Centre</option>
            <option value="1"> Hospital One</option>
            <option value="2">Hospital Two</option>
            <option value="3">Hospital 3</option>
          </select>
          
          <button type="button" class="btn btn-outline-primary my-4">
            Submit
          </button>

        </div>
      </div>
    </div>
    </form>
    ) : (
      <div>Getting the location data&hellip; </div>
  );
};
function Home() {
	const location = useLocation();
  	return <>
		<h2>Current Pathname {location.pathname}</h2>
		<p>Home Page</p>
	</>;
}

export default Booking;
