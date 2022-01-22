import React from "react";
import "./Home.css";
import { TypingTitle } from "./TypingTitle";
// import Nav from "react-bootstrap/Nav";
import image from "../../assets/images/TechPic/Profile_pic.png";

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
                {/* <img src="https://i.ibb.co/NsKFqMR/original-pic-1.jpg" alt="profile-pic" /> */}
                <img src={image} alt="profile-pic" />
              </div>
            </div>
            <div className="home-text " style={{ color: "#F6F6F6" }}>
              <h3>Hi,</h3>
              <h2>I'm Ranjan Kumar Thakur</h2>
              <h1 className="title">
                <TypingTitle />
              </h1>
              .
              <div className="about-me-div">
                <div className="about-me-btn">
                  <a
                    href="https://drive.google.com/file/d/1nz832GQQga4pZNPuQBrgPwiObyuli2cd/view?usp=sharing"
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
