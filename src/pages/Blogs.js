import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchComments } from '../actions/commentsActions'
import { selectComments, selectCommentsStatus, selectCommentsError } from '../selectors/commentsSelectors'
import Message from '../components/Message'
import { Container } from 'react-bootstrap'
import Blogs2 from './Blogs2'
import Loader from '../components/Loader'
import Warning from '../components/Warning'

const Blogs = () => {

  const dispatch = useDispatch()
  const comments = useSelector(selectComments)
  const status = useSelector(selectCommentsStatus)
  const error = useSelector(selectCommentsError)



  useEffect(() => {
    dispatch(fetchComments())
  }, [dispatch]) 
   const refreshData = () => {
    dispatch(fetchComments())
   }

return (
    <Container>
     <Blogs2 refreshData = {refreshData} />

     {status
      ? <Loader />
      : error ? <Warning variant='danger'>{error}</Warning> 
     :
     <Container>
    {comments.map(comment=>(
    <Container key={comment._id} sm={12} md={6} lg={4} xk={3} >
        <Message comment={comment} />
    </Container>))}
</Container>}



    </Container>
    )  

  }
export default Blogs
