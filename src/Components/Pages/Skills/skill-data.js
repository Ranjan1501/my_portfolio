import L_HTML5 from "../../assets/images/TechPic/html.svg";
import L_CSS3 from "../../assets/images/TechPic/css.svg";
import L_REACT from "../../assets/images/TechPic/react.svg";
import L_REDUX from "../../assets/images/TechPic/redux.svg";
import L_NODE_JS from "../../assets/images/TechPic/nodejs.svg";
import L_MONGODB from "../../assets/images/TechPic/mongoDB.svg";
import L_JAVASCRIPT from "../../assets/images/TechPic/js.svg";
import L_EJS from "../../assets/images/TechPic/ejs-svgrepo-com.svg";
import L_EXPRESS from "../../assets/images/TechPic/expressjs.svg";
import typescript from "../../assets/images/TechPic/typescript.svg";
import php from "../../assets/images/TechPic/php.svg";
import postgresql from "../../assets/images/TechPic/postgresql.svg";
import phpMyAdmin from "../../assets/images/TechPic/phpmyadmin.svg";
import docker from "../../assets/images/TechPic/docker.svg";
import postman from "../../assets/images/TechPic/postman.svg";
import java from "../../assets/images/TechPic/java.svg";

export const skills = {
  programming: [
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },
    {
      link: "https://nodejs.org/en/",
      imgAltText: "Node.js",
      imgSrc: L_NODE_JS,
      skillName: "Node.js",
    },
    {
      link: "https://www.typescriptlang.org/",
      imgAltText: "TypeScript",
      imgSrc: typescript,
      skillName: "TypeScript",
    },
    {
      link: "https://docs.oracle.com/en/java/",
      imgAltText: "Java",
      imgSrc: java,
      skillName: "Java",
    },
    {
      link: "https://www.python.org/",
      imgAltText: "Python",
      imgSrc: null,
      skillName: "Python",
    },
  ],
  frontend: [
    {
      link: "https://reactjs.org/",
      imgAltText: "React JS",
      imgSrc: L_REACT,
      skillName: "React JS",
    },
    {
      link: "https://redux.js.org/",
      imgAltText: "Redux",
      imgSrc: L_REDUX,
      skillName: "Redux",
    },
    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgAltText: "HTML 5",
      imgSrc: L_HTML5,
      skillName: "HTML5",
    },
    {
      link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
      imgAltText: "CSS 3",
      imgSrc: L_CSS3,
      skillName: "CSS3",
    },
  ],
  backend: [
    {
      link: "https://expressjs.com/",
      imgAltText: "Express",
      imgSrc: L_EXPRESS,
      skillName: "Express.js",
    },
    {
      link: "https://socket.io/",
      imgAltText: "Socket.io",
      imgSrc: null,
      skillName: "Socket.io",
    },
    {
      link: "https://graphql.org/",
      imgAltText: "GraphQL",
      imgSrc: null,
      skillName: "GraphQL",
    },
    {
      link: "https://ejs.co/",
      imgAltText: "EJS",
      imgSrc: L_EJS,
      skillName: "EJS",
    },
  ],
  database: [
    {
      link: "https://www.mongodb.com/",
      imgAltText: "MongoDB",
      imgSrc: L_MONGODB,
      skillName: "MongoDB",
    },
    {
      link: "https://www.postgresql.org/",
      imgAltText: "PostgreSQL",
      imgSrc: postgresql,
      skillName: "PostgreSQL",
    },
    {
      link: "https://www.mysql.com/",
      imgAltText: "MySQL",
      imgSrc: null,
      skillName: "MySQL",
    },
    {
      link: "https://hive.apache.org/",
      imgAltText: "Apache Hive",
      imgSrc: null,
      skillName: "Apache Hive",
    },
  ],
  devops: [
    {
      link: "https://www.docker.com/",
      imgAltText: "Docker",
      imgSrc: docker,
      skillName: "Docker",
    },
    {
      link: "https://about.gitlab.com/",
      imgAltText: "GitLab CI/CD",
      imgSrc: null,
      skillName: "GitLab CI/CD",
    },
    {
      link: "https://www.terraform.io/",
      imgAltText: "Terraform",
      imgSrc: null,
      skillName: "Terraform",
    },
    {
      link: "https://airflow.apache.org/",
      imgAltText: "Apache Airflow",
      imgSrc: null,
      skillName: "Apache Airflow",
    },
  ],
  monitoring: [
    {
      link: "https://www.grafana.com/",
      imgAltText: "Grafana",
      imgSrc: null,
      skillName: "Grafana",
    },
    {
      link: "https://www.opsgenie.com/",
      imgAltText: "OpsGenie",
      imgSrc: null,
      skillName: "OpsGenie",
    },
    {
      link: "https://aws.amazon.com/cloudwatch/",
      imgAltText: "AWS CloudWatch",
      imgSrc: null,
      skillName: "AWS CloudWatch",
    },
  ],
  cloud: [
    {
      link: "https://aws.amazon.com/",
      imgAltText: "AWS",
      imgSrc: null,
      skillName: "AWS (S3, EC2, EMR, Lambda, ALB, WAF, CloudWatch, SSM)",
    },
  ],
  tools: [
    {
      link: "https://www.postman.com/",
      imgAltText: "Postman",
      imgSrc: postman,
      skillName: "Postman",
    },
    {
      link: "https://www.phpmyadmin.net/",
      imgAltText: "phpMyAdmin",
      imgSrc: phpMyAdmin,
      skillName: "phpMyAdmin",
    },
    {
      link: "https://dbeaver.io/",
      imgAltText: "DBeaver",
      imgSrc: null,
      skillName: "DBeaver",
    },
    {
      link: "https://swagger.io/",
      imgAltText: "Swagger",
      imgSrc: null,
      skillName: "Swagger",
    },
  ],
};
