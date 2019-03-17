import React from 'react'
import { NavLink } from 'react-router-dom';
import './BackButtonHeader.css'

import ArrowLeftSVG from './ArrowLeftSVG.js'


const BackButtonHeader = props => {
  return (
    <div className="backButtonHeader">
      <NavLink to="/" className="backButton">
        <ArrowLeftSVG />
        <div className="backText">back</div>
      </NavLink>
    </div>
  )
}

export default BackButtonHeader
