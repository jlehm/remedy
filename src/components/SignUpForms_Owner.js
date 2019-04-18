import React from 'react'
import InputElement from './../components/InputElement.js'

const SignUpForms_Owner = ({ state, onChange }) => (
  <form className="signUpForms">
    <InputElement label="First Name" type="text" name="owner_firstName" onChange={onChange} value={state.owner_firstName}  />
    <InputElement label="Middle Name" type="text" name="owner_middleName" onChange={onChange} value={state.owner_middleName}  />
    <InputElement label="Last Name" type="text" name="owner_lastName" onChange={onChange} value={state.owner_lastName}  />
    <InputElement label="Phone Number" type="tel" name="owner_phoneNumber" onChange={onChange} value={state.owner_phoneNumber}  />
  </form>
)

export default SignUpForms_Owner