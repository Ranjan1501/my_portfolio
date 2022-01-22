import React from "react";
// import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";
// import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { skills } from "./skill-data";
import "./Skill.css";

const Skills = () => {
  return (
    <div className="pt-3 mt-5 pb-3 skill" id="skills">
      <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
      <Row
        className="d-flex justify-content-around flex-row "
        style={{ margin: "auto" }}
      >
        <div className="main-skills">
          {skills.frontend.map((skill, index) => (
            <div className="get-skill">
              <img src={skill.imgSrc} alt={skill.imgAltText} width="80" />
              <p>{skill.skillName}</p>
            </div>
          ))}
        </div>
      </Row>
    </div>
  );
};

export { Skills };
