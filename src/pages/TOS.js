import React from 'react'
import BackButtonHeader from '../components/BackButtonHeader.js'
import Footer from '../features/Footer.js'
import './TOS.css'

const TOS = (props) => {
  return (
    <div>
      <BackButtonHeader />
      <div className="tosContent">
        <h2>Terms of Service</h2>
        <p><b>Effective Date: April 20, 2018</b></p>
        <p>These User Terms of Service (the <b>“User Terms”</b>) govern your access and use of our online workplace productivity tools and platform (the <b>“Services”</b>). Please read them carefully. Even though you are signing onto an existing workspace, these User Terms apply to you as a user of the Services. We are grateful you’re here.</p>
        <h2>First things First</h2>
      </div>
      <Footer />
    </div>
  )
}

export default TOS
