import axios from 'axios'
import {
  FETCH_COMMENTS_STARTED,
  FETCH_COMMENTS_SUCCEEDED,
  FETCH_COMMENTS_FAILED
} from '../constants/commentsConstants'

export const fetchCommentsStarted = () => ({
  type: FETCH_COMMENTS_STARTED
})

export const fetchCommentsSucceeded = comments => ({
  type: FETCH_COMMENTS_SUCCEEDED,
  comments
})

export const fetchCommentsFailed = error => ({
  type: FETCH_COMMENTS_FAILED,
  error
})

export const fetchComments = () => {
  return async dispatch => {
    dispatch(fetchCommentsStarted())

    try {
      // Axios is common, but also `fetch`, or your own "API service" layer
      const res = await axios.get('https://pepnhos-server-portf.onrender.com/comments')
      dispatch(fetchCommentsSucceeded(res.data))
    } catch (error) {
      dispatch(fetchCommentsFailed(error))
    }
  }
}
