import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './css/Footer.css'



const Footer = () => {
  return (
    <footer>
      <Container>
        <Row id='footer-row'>
          <Col className='text-center py-3'>
            Copyright &copy; 2023 Giuseppe Ferlazzo
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer