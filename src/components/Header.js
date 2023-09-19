import Container from 'react-bootstrap/Container';
import {  Col, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import { BsPersonWorkspace } from 'react-icons/bs'
//import { LinkContainer } from 'react-router-bootstrap'
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar} from "react-icons/ai";

const Header = () => {
  return (
   
    <Navbar expand="lg" className="bg-body-tertiary"> 
    <Container>
      <Row >
      <Col>
      <Navbar.Brand href="/">Giuseppe Ferlazzo</Navbar.Brand>
      </Col>
      <Col className="d-flex">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-2"
          
          navbarScroll
        >
          <Nav.Link className='mr-auto' chref="/">Home</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <NavDropdown title="Socials" id="navbarScrollingDropdown">
            <NavDropdown.Item href="https://react-icons.github.io/react-icons/" target="_blank">Facebook</NavDropdown.Item>
            <NavDropdown.Item href="https://google.it/" target="_blank">
              Google
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://instagram.com/" target="_blank">
              Instagram 
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="https://react-icons.github.io/react-icons/" target="_blank">
            <CgGitFork  style={{ fontSize: "1em" }} /><AiFillStar  style={{ fontSize: "1em" }} />
             
         </Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Col>
        </Row>
    </Container>
  </Navbar>
  );
}


export default Header