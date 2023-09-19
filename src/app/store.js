import { configureStore } from '@reduxjs/toolkit'

import commentsReducers from '../reducers/commentsReducers'

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    comments: commentsReducers
  }
})


export default store