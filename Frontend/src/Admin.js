import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/images.jpg";


const Admin = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-centre">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                 
                  <div className="mt-3 ">
                    <NavLink to="/AddAmbulance" className="btn-ambulance">
                      Add Ambulance
                    </NavLink>
                  </div>
                  <div className="mt-3 ">
                    <NavLink to="/ViewAmbulance" className="btn-ambulance">
                      View Ambulance
                    </NavLink>
                  </div>
                  <div className="mt-3 ">
                    <NavLink to="/ViewBooking" className="btn-ambulance">
                      View Booking
                    </NavLink>
                  </div>
                  
                  <div className="mt-3 ">
                    <NavLink to="/viewuser" className="btn-ambulance">
                      View User
                    </NavLink>
                  </div>
                </div>
                <image className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="home-img"
                  />
                </image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Admin;
