import React from 'react'
import { Alert } from 'react-bootstrap'


const Warning = ({ variant, children}) => {
  return (
    <Alert variant={variant}>
        {children}
    </Alert>
  )
}

Warning.defaultProps = {
    variant: 'info',
}


export default Warning
