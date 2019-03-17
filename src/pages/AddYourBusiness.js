import React from 'react'
import BackButtonHeader from './../components/BackButtonHeader.js'
import Footer from './../features/Footer.js'

const AddYourBusiness = (props) => {
  return(
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

export default AddYourBusiness
