import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/images.jpg";


const ViewOption = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-centre">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <p>Save your loved ones with</p>
                    <strong className="brand-name"> E-Ambulance</strong>
                  </h1>
                  <h2 className="my-3">
                    We are a team of enthusiastic people trying to help you out
                    through our constant efforts
                  </h2>
                  <div className="mt-3 ">
                    <NavLink to="/booking" className="btn-ambulance">
                      Guest User
                    </NavLink>
                  </div>
                  <div className="mt-3 ">
                    <NavLink to="/regLogin" className="btn-ambulance">
                      Registered User
                    </NavLink>
                  </div>
                  <div className="mt-3 ">
                    <NavLink to="/register" className="btn-ambulance">
                      Register
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
export default ViewOption;
