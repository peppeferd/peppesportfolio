import React from 'react'
import Home3 from './Home3'
import { Row } from 'react-bootstrap'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import { PiArrowElbowRightDownBold } from 'react-icons/pi'
import './css/Contact.css'



const Contact = () => {
  return (
    <>
  
    <h1 className='title-contact'><BsFillArrowRightSquareFill /> You can get in touch with me writing a <a href="mailto:giuseppeferlazzo@outlook.it">mail</a> to this mailbox: <a href="mailto:giuseppeferlazzo@outlook.it">giuseppeferlazzo@outlook.it</a></h1> 
    <h1 className='title-contact'><BsFillArrowRightSquareFill /> Or trough the phone number you can find in my cv, or in the end trough of one of these socials: <PiArrowElbowRightDownBold /></h1>
    <Row>
    <Home3 />
    </Row>    
    </>
  )
}

export default Contact