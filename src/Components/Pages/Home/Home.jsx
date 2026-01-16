import React from "react";
import "./Home.css";
import { TypingTitle } from "./TypingTitle";
// import Nav from "react-bootstrap/Nav";
import image from "../../assets/images/TechPic/Ranjan_Crop.jpeg";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Home() {
  return (
    <div id="home">
      <section className="home-section section ">
        <div className="container">
          <div className="row full-screen ">
            <div className="home-img ">
              <div className="img-box shadow image">
                <img src={image} alt="profile-pic" />
              </div>
            </div>
            <div className="home-text " style={{ color: "#F6F6F6" }}>
              <h3>Hi,</h3>
              <h3>
                I'm Ranjan Kumar Thakur, Working at Nielsen Media India Pvt. Ltd.
              </h3>
              <h1 className="title">
                <TypingTitle />
              </h1>
              .
              <div className="about-me-div">
                <div className="about-me-btn">
                  <a
                    href="https://drive.google.com/drive/folders/1LsOGk_j2_mOz1m09nzLR_DLQl0qse-tS?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Resume
                  </a>
                </div>
                <div className="about-me-btn">
                  <a
                    href="https://www.linkedin.com/in/ranjan-kumar-thakur-47a65662/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <LinkedInIcon /> Linkedin{" "}
                  </a>
                </div>
                <div className="about-me-btn">
                  <a
                    href="https://github.com/Ranjan1501/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <GitHubIcon /> Github{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { Home };
