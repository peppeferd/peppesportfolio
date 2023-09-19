import React from 'react'
import Home3 from './Home3';
import { Container, Col, Row } from 'react-bootstrap'
import myImg from "../assets/avatar.svg"
import Tilt from "react-parallax-tilt";
import './css/Home.css'



const Home2 = () => {
  return (
  <div className='home-content' id='home2'>
    <Container className='py-5 home-container'>
<Row>
  <Col md={8} className="home-about-description">
    <h5 style={{ fontSize: "2em" }} className='home-title'>
      LET ME INTRODUCE MYSELF
    </h5>
    <p className="home-about-body">
      I fell in love with programming and I have at least learnt
      something, I think… 🤷‍♂️
      <br />
      <br />I am fluent in JS frameworks like
      <i>
        <b className="purple"> React, React-Native and Node. </b>
      </i>
  </p>
  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>
<Row>
  <Col md={12} className="home-about-social">
    <h1 className='home-title'>FIND ME ON</h1>
    <p>
      Feel free to connect with me
    </p>
    </Col>
    <Home3 />
</Row>
</Container></div>
  )
}

export default Home2