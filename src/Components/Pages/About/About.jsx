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
              <h6>Hi, I'm Ranjan Kumar Thakur</h6>
              I am working at Nielsen Media India Pvt. Ltd. I am working as a
              Software Engineer II with audience measurment vertical. Nielsen is
              a global leader in audience measurement, data and analytics,
              shaping the future of media. Measuring behavior across all
              channels and platforms to discover what audiences love, we empower
              our clients with trusted intelligence that fuels action.
              <br />
              Quick Learner, Team Player, Collaborative, Dedicated, Open-minded
              and Self Motivated, developer with a keen interest in software
              development.
              <br />
              I am a people friendly, calm and composed individual who thrives
              to work as team player to gain maximum outcome to solve the
              problems.
              <br />
              My objective is to leverage my experience in
              cloud-native microservices and data engineering to build scalable
              backend systems that drive tangible business value. In my past
              roles, I’ve successfully used technologies like Node.js, Java, and
              AWS to drive 23% revenue growth and improve workflow efficiency by
              33%. I am looking for a challenging SDE II role where I can
              continue to architect high-performance solutions that solve
              complex business problems.
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
                <sapn className="about-desc-span">Bangalore, Karnataka</sapn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { About };
