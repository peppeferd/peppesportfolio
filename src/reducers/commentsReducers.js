import {
    FETCH_COMMENTS_STARTED,
    FETCH_COMMENTS_SUCCEEDED,
    FETCH_COMMENTS_FAILED
  } from '../constants/commentsConstants'
  
  const initialState = {
    status: 'uninitialized',
    comments: [],
    error: null
  }
  
  export default function commentsReducers(state = initialState, action) {
    switch (action.type) {
      case FETCH_COMMENTS_STARTED: {
        return {
          ...state,
          status: 'loading'
        }
      }
      case FETCH_COMMENTS_SUCCEEDED: {
        return {
          ...state,
          status: 'succeeded',
          comments: action.comments
        }
      }
      case FETCH_COMMENTS_FAILED: {
        return {
          ...state,
          status: 'failed',
          comments: [],
          error: action.error
        }
      }
      default:
        return state
    }
  }
