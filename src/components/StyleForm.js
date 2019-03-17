import React from 'react'

import ReusableInput from './../components/ReusableInput.js'
import ReusableButton from './../components/ReusableButton.js'
import ReusableLink from './../components/ReusableLink.js'

import './ButtonLinkWrapper.css'
import './SignInForm.css'


const StyleForm = () => (
  <div className="signInForm">
    <div className="signInFormLabel">Sign In</div>
    <ReusableInput type="email" label="email" />
    <ReusableInput type="password" label="password" />
    <div className="ButtonLinkWrapper">
      <ReusableButton label="Submit" onClick={()=>console.log('do something!')} />
      <ReusableLink label="Forgot Password?" />
    </div>
  </div>
)
export default StyleForm
