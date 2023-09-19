import React from 'react'
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Col } from 'react-bootstrap'




const Home3 = () => {
  return (
    <>
    <Col className='home-social-icons'>
    
    <a
      href="https://github.com/peppeferd"
      target="_blank"
      rel="noreferrer"
      className="icon-colour  home-social-icons"
    >
      <AiFillGithub />
    </a>
  </Col><Col className='home-social-icons'>
    <a
      href="https://www.linkedin.com/in/giuseppe-ferlazzo-332333ferdzx/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour  home-social-icons"
    >
      <FaLinkedinIn />
    </a>
    </Col><Col className='home-social-icons'>
    <a
      href="https://www.instagram.com/peppeferlazzo/"
      target="_blank"
      rel="noreferrer"
      className="icon-colour home-social-icons"
    >
      <AiFillInstagram />
    </a>
    
</Col>
</>
  )
}

export default Home3