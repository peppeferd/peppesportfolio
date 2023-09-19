export const selectCommentsStatus = state => state.comments.status === 'loading'
export const selectComments = state => state.comments.comments
export const selectCommentsError = state => state.comments.error
