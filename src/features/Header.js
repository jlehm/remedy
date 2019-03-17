import React from 'react'
import Brand from './../components/Brand.js'
import Navigation from './../features/Navigation.js'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <Brand />
      <Navigation />
    </div>
  )
}

export default Header
