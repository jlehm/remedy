import React from 'react'
import Footer from '../features/Footer.js'
import { SignUpFormWithFirebase } from './../components/SignUpForm.js'

const SignUp = () => {
  return(
    <div >
      <div className="signUpFormWrapper">
        <SignUpFormWithFirebase />
      </div>
      <Footer />
    </div>
  )
}

export default SignUp
