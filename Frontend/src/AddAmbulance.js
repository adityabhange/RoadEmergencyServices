import React, { useState } from "react";
import { useGeolocated } from "react-geolocated";
import { Redirect } from "react-router-dom";
import ambulanceService from "./AmbulanceService";

const AddAmbulance = () => {

// Fetch Lat Lon

//End

  const [data, setData] = useState({
    ambulanceDetail:"",
    features:"",
    drivername: "",
    phone: "",
    email: "",
    vehicleno:"",
    latitude: "",
    longitude:"",
    status:"AVAILABLE"

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
    let ambulance = {ambulanceDetail: data.ambulanceDetail,features:data.features,drivername:data.drivername, phone: data.phone, email: data.email, vehicleno: data.vehicleno,
        latitude: data.latitude, longitude: data.longitude,status:data.status};
    ambulanceService.addAmbulance(ambulance).then( res=>{
        this.state.successmsg = res.data;
        console.log(res.data);
        Redirect('/Admin');
    });

    alert(
      `Save Successfully`
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
        <h1 className="text-center">Add Ambulance</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                 Ambulance Detail
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="ambulanceDetail"
                  value={data.ambulanceDetail}
                  onChange={InputEvent}
                  placeholder="Enter Ambulance Detail"
                />
                
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                 Features
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="features"
                  value={data.features}
                  onChange={InputEvent}
                  placeholder="Enter Ambulance Feature"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Driver Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="drivername"
                  value={data.drivername}
                  onChange={InputEvent}
                  placeholder="Enter Driver Name"
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
                  VehicleNo
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="vehicleno"
                  value={data.vehicleno}
                  onChange={InputEvent}
                  placeholder="Input Vehicle No"
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
                  
                  
                  placeholder="Latitude"
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
                 
                 
                  placeholder="Longitude"
                />
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Save
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
export default AddAmbulance;
