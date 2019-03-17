import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import './Brand.css'
import LogoSVG from './../components/LogoSVG.js'

const Brand = (props) => {
  return (props.location.pathname === "/")?
  (
    <div className="brandAndLogo">
      <LogoSVG />
      <div to={"/"} className="brand">
        remedy
      </div>
    </div> 
  ):
  (
    <div className="brandAndLogo">
      <LogoSVG />    
      <NavLink to={"/"} className="brand">
        remedy
      </NavLink>
    </div>
  )
}

export default withRouter(Brand)
