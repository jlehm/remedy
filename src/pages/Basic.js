import React from 'react'
import BackButtonHeader from './../components/BackButtonHeader.js'
import Footer from './../features/Footer.js'
import './Basic.css'

const Basic = (props) => {
  return (
    <div>
      <BackButtonHeader />
      <div className="basic">
        <div className="basicHeader">{props.header}</div>
        <p className="basicContent">{props.content}</p>
      </div>
      <Footer />
    </div>
  )
}

export default Basic
