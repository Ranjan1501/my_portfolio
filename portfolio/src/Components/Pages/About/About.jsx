import React from "react";
import "./About.css";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const About = () => {
  return (
    <div id="about">
      <section className="about-section section ">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h1 data-heading="main info">About me</h1>
            </div>
          </div>

          <div className="about-info">
            <p>
              <h6>Hi! I'm Ranjan Kumar Thakur</h6>
              Dedicated, Open-minded and Self Motivated, developer with a keen
              interest in software development.
              <br />
              I am a people friendly, calm and composed individual who thrives
              to work as team player to gain maximum outcome to solve the
              problems.
              <br />
              My carrier objective are to learn the Frameworks, API, tech stacks
              first as my role demands on which my organization is working and
              implement the expertise and experience to lead my organization and
              represent at apex level
              <br />
              <br />
            </p>
            <div className="about-desc">
              <div className="about-desc-icon">
                <CallIcon />
                <sapn className="about-desc-span">+91 8920279634</sapn>
              </div>
              <div className="about-desc-icon">
                <EmailIcon />
                <sapn className="about-desc-span">
                  ranjankumar1757@gmail.com
                </sapn>
              </div>
              <div className="about-desc-icon">
                <LocationOnIcon />
                <sapn className="about-desc-span">New Delhi, Delhi</sapn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { About };
