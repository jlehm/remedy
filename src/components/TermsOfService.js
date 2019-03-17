import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './TermsOfService.css'

const TermsOfService = (props) => {
  return (
    (props.location.pathname==="/tos")?null:(<NavLink to="/tos" className="termsOfService">Terms of Service</NavLink>)
  )
}

export default withRouter(TermsOfService)
