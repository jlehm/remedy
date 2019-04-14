import React from 'react'
import InputElement from './../components/InputElement.js'

const SignUpForms_Owner = () => (
  <React.Fragment>
    <InputElement label="First Name" type="text" name="firstName"  />
    <InputElement label="Middle Name" type="text" name="middleName"  />
    <InputElement label="Last Name" type="text" name="lastName"  />
    <InputElement label="Phone Number" type="tel" name="phoneNumber"  />
  </React.Fragment>
)

export default SignUpForms_Owner