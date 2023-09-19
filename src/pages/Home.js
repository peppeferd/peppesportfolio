import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Typewriter from "typewriter-effect";
import homeLogo from "../assets/home-main.svg";
import iopeppe from '../assets/mestesso.png'
import Home2 from './Home2';
import './css/Home.css'


const Home = () => {
  return (
    <div className='home-content' id='home'>
    <Container className="pt-5 home-container">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="home-title">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="home-title">
                I'M
                <strong className="main-name"> GIUSEPPE FERLAZZO</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                
              <Typewriter
      options={{
        strings: [
          "Developer",
          "MERN Stack Developer",
          "Smart Contracts Developer",
          "Student in blockchain development",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        
      }}
    />
    <img
                src={iopeppe}
                alt="home pic"
                className="img-fluid pt-5"
                style={{ maxHeight: "450px", borderRadius: "101px" }}
              />

              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>

         <Home2 />

</div>
  )
}

export default Home