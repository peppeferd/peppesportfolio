import React from 'react'
import {Button, Container,Col, Row } from "react-bootstrap";
import { AiOutlineDownload } from 'react-icons/ai'
import pdfITA from '../assets/GiuseppesCVinITA.pdf'
import pdfENG from '../assets/GiuseppesCVinENG.pdf'



const Resume = () => {
  return (
    <Container fluid className="resume-section">
      <Container className='d-flex flex-column'>
    <Col>
      <Row style={{ justifyContent: "center", paddingTop: "37px", paddingBottom: "37px"}}>
     <h1 className="d-flex justify-content-center">Download Curriculum in Italian</h1>
     </Row>
    <Row style={{ justifyContent: "center", position: "relative", paddingTop: "37px", paddingBottom: "37px" }}>
      <Button
        variant="primary"
        href={pdfITA}
        target="_blank"
        style={{ maxWidth: "250px" }}
      >
        <AiOutlineDownload />
        &nbsp;Download CV
      </Button>
    </Row>
</Col>
    </Container>


    <Container className='d-flex flex-column'>
    <Col>
      <Row style={{ justifyContent: "center", paddingTop: "57px", paddingBottom: "37px"}}>
     <h1 className="d-flex justify-content-center">Download Curriculum in English</h1>
     </Row>
    <Row style={{ justifyContent: "center", position: "relative", paddingTop: "37px", paddingBottom: "37px" }}>
      <Button
        variant="primary"
        href={pdfENG}
        target="_blank"
        style={{ maxWidth: "250px" }}
      >
        <AiOutlineDownload />
        &nbsp;Download CV
      </Button>
    </Row>
</Col>
    </Container>

  </Container>
  )
}

export default Resume