import React, { useState} from 'react'
import axios from 'axios'
import { Row } from 'react-bootstrap'
import './css/Blogs2.css'

const Blogs2 = (props) => {



    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [comments, setComments] = useState([]);
 

    const client = axios.create({
        baseURL: "https://pepnhos-server-portf.onrender.com/comments" 
      });
  
 
    const addPosts = (author, text) => {
       client
          .post('', {
             author: author,
             text: text,
          })
          .then((response) => {
             setComments([response.data, ...comments]);
             props.refreshData();
          });
       setAuthor('');
       setText('');
    };

  const handleSubmit = (e) => {
       e.preventDefault();
       addPosts(author, text);
       
      };

  return ( 
   
   
     <Row>
       <form onSubmit={handleSubmit}>
       <h6 className='comment-title'>Nickname</h6>
       <input value={author} onChange={(e)=>setAuthor(e.target.value)} />
       <h6 className='comment-title'>Your comment</h6>
       <textarea value={text} className='input-form' onChange={(e)=>setText(e.target.value)} /> 
       <input id='submit-btn' type='submit' value="Send" />
       </form>
   </Row>
  
  )
}

export default Blogs2
