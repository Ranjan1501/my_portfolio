import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { MyNavbar } from "./Components/Pages/Navbar/Nav";
import { Home } from "./Components/Pages/Home/Home";
import { About } from "./Components/Pages/About/About";
import Container from "react-bootstrap/Container";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { Skills } from "./Components/Pages/Skills/Skills";
import { Project } from "./Components/Pages/Projects/Project";
import { Contacts } from "./Components/Pages/Contact/Contact-us";
// import TestTimeline, { TestTimeline2 } from "./Components/Pages/TestTimeline";
import { Demo } from "./Particle.jsx";
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(to right, #73c8a9, #373b44)`,
        }}
      >
        <Demo />
      </div>
      <Home />
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <Fade duration={500}>
              <About />
            </Fade>
          </Slide>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Project />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Contacts />
        </Slide>
      </Container>
    </div>
  );
}

export default App;
