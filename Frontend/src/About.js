import React from "react";
import "./About.css"

const About = () => {
  return (
    <>
      <section>
        <div className="container py-3">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xl-12">
              <h1 className="about">ABOUT US</h1>
              <h2 className="heading">Who Are We?</h2><br/>
              <p>
                E-Ambulance is an online ambulance booking platform to book an
                emergency ambulance, to transport the patient to a nearest
                hospital in the golden hour with just a click of a button. Our
                objective is to bring price transparency and improve quality of
                healthcare services. At the same time we aim to support taxi and
                other transport sector drivers earn durind their tough times. At
                E-Ambulance ambulance we plan to provide a platform to help you
                find health solutions that are convenient and useful enough to
                continue for a longer time.People in need of medical assistance
                would be able to connect to the right doctors at affordable
                fees.
              </p>
            </div><br/>
            <div className="col-md-12 col-sm-12 col-xl-12">
              <h2 className="heading">Unique Features Of E-Ambulance</h2><br/>
              <p>
                The app provides an option to select a Pre or Post Paid
                Ambulance. There is an emergency option as well.You can choose
                Coverted ambulances without compromising on facilities. You can
                choose whether to use a converted or regular ambulance.You can
                choose if you need a medical team along with the
                ambulance.Besides neccessary precautions would be taken to
                prevent the spread of ongoing covid virus.
              </p><br/>
            </div><br/>
            <div className="col-md-12 col-sm-12 col-xl-12"></div>
            <h2 className="heading"> How Does It Work?</h2><br/> 
            <h4>
              E-Ambulance works like any other taxi booking app like Ola & Uber
              with the same booking structure.
            </h4><br/>
            <p>
              <b>Call ambulance app Benefits Of E-Ambulance Patients :- </b> Self-Care
              Ambulance Booking Easy to book ambulance by Old age
              Patients.Ambulance track the nearby hospitals that are available
              at the particular time to serve patients. So a Non-GPS Mobile
              phone user can also use the app. Feed backs can be given for
              doctors & drivers specific ambulance.
            </p><br/>
            <p>
             <b> About E-Ambulance drivers Web-App :-</b> E-Ambulance Drivers Web-app allows
              drivers And owners to receive and accept the patients request for
              emergency and elective patient transportation. Driver have to
              register to partner with E-Ambulance to provide the service. Driver
              can also add multiple drivers for a same ambulance. They can also
              add the rates for providing the service specific to the areas.
              Driver need to first convert their vehicle to basic ambulance and
              required assisstance if any would be provided by E-Ambulance team.Our
              team would check-through the implementation of the conversion and
              identity of drivers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
