import React, { useState } from "react";
import { useGeolocated } from "react-geolocated";
import { Redirect } from "react-router-dom";
import registerService from "./RegisterService";

const Register = () => {

// Fetch Lat Lon

//End

  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password:"",
    address: "",
    
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
//Async Call


//
  const formSubmit = (e) => {
    e.preventDefault();
    let user = {name: data.fullname, phone: data.phone, email: data.email, password: data.password,
        address: data.address, latitude: data.latitude, longitude: data.longitude};
    registerService.addUser(user).then( res=>{
        this.state.successmsg = res.data;
        console.log(res.data);
        Redirect('/Login');
    });

    alert(
      `Register Successfully`
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
    <>
      <div className="my-5">
        <h1 className="text-center">Register Here</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
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
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="password"
                  value={data.password}
                  onChange={InputEvent}
                  placeholder="********"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="address"
                  value={data.address}
                  onChange={InputEvent}
                  placeholder="Address"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Latitude
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="latitude"
                  value={coords.latitude}
                  onChange={InputEvent}
                  readOnly="true"
                  placeholder={coords.latitude}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Longitude
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="longitude"
                  value={coords.longitude}
                  onChange={InputEvent}
                  readOnly="true"
                  placeholder={coords.longitude}
                />
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
  
};
export default Register;
