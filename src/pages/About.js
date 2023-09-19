import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import laptopImg from "../assets/about.png";
import './css/About.css'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiNpm,
  DiBootstrap,
  DiGit,
} from "react-icons/di";
import {
  SiSolidity,
  SiSemanticuireact,
  SiExpress,
  SiCodepen,
  SiAndroidstudio,
  SiVisualstudiocode,
  SiPostman,
  SiAdobephotoshop,
} from "react-icons/si";

function About() {
  return (
    <Container fluid className="about-section">
      
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>



            <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Giuseppe Ferlazzo </span>
            from <span className="purple"> Furci Siculo, Italy.</span>
            <br />I am a development passionate that has decided to
            <br /> looking for a dev roule in 
            <br />tech working world.
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Workout
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Defeat is a state of mind!"{" "}
          </p>
          <h5> - Bruce Lee</h5>
        </blockquote>
      </Card.Body>
    </Card>






          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>



        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
        <Col xs={4} md={2} className="tech-icons">
        <AiOutlineHtml5 className="skill-icons"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoCss3 className="skill-icons"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="skill-icons"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity className="skill-icons"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap className="skill-icons"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="skill-icons"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress className="skill-icons"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSemanticuireact className="skill-icons"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs className="skill-icons"/>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb className="skill-icons"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNpm className="skill-icons"/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit className="skill-icons"/>
      </Col>
     
      
    </Row>



        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
    
    

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode className="skill-icons"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio className="skill-icons"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman className="skill-icons"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop className="skill-icons"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodepen className="skill-icons"/>
      </Col>
     
    </Row>

        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="peppeferd"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>



      </Container>
    </Container>
  );
}

export default About;