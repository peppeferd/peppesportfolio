import React from 'react'
import { Col } from 'react-bootstrap'
import './css/Message.css'


const Message = ({comment}) => {
  return (
    <Col id='commenti'>
     <h1 id='nick'>{comment.author} typed:</h1>
      
      <h1 id='message'>{comment.text}</h1>
   </Col>
    
  )
} 
 
export default Message
