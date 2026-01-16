import React from "react";
import Row from "react-bootstrap/Row";
import { skills } from "./skill-data";
import "./Skill.css";

const Skills = () => {
  const skillCategories = [
    { name: "Programming", key: "programming" },
    { name: "Frontend", key: "frontend" },
    { name: "Backend", key: "backend" },
    { name: "Database", key: "database" },
    { name: "DevOps", key: "devops" },
    { name: "Monitoring & Observability", key: "monitoring" },
    { name: "Cloud", key: "cloud" },
    { name: "Tools", key: "tools" },
  ];

  return (
    <div className="pt-3 mt-5 pb-3 skill" id="skills">
      <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
      {skillCategories.map((category) =>
        skills[category.key] && skills[category.key].length > 0 ? (
          <div key={category.key}>
            {category.key === "cloud" ? (
              <div className="aws-section">
                <h4>☁️ {category.name}</h4>
                <div className="aws-skills">
                  {skills[category.key].map((skill, index) => (
                    <div key={index} className="aws-skill-item">
                      {skill.skillName}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-5">
                <h4 className="text-center text-muted mb-4">{category.name}</h4>
                <Row
                  className="d-flex justify-content-around flex-row"
                  style={{ margin: "auto" }}
                >
                  <div className="main-skills">
                    {skills[category.key].map((skill, index) => (
                      <div key={index} className="get-skill">
                        {skill.imgSrc ? (
                          <img
                            src={skill.imgSrc}
                            alt={skill.imgAltText}
                            width="80"
                          />
                        ) : (
                          <div
                            style={{
                              width: "80px",
                              height: "80px",
                              backgroundColor: "#f0f0f0",
                              borderRadius: "8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "12px",
                              fontWeight: "bold",
                              textAlign: "center",
                              padding: "5px",
                            }}
                          >
                            {skill.skillName}
                          </div>
                        )}
                        <p>{skill.skillName}</p>
                      </div>
                    ))}
                  </div>
                </Row>
              </div>
            )}
          </div>
        ) : null
      )}
    </div>
  );
};

export { Skills };
