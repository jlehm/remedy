import React from 'react'
import InputElement from './../components/InputElement.js'
import ButtonElement from './../components/ButtonElement.js'

const SignUpForms_Owner = ({ index, state, onChange, PrevButton, NextButton }) => {
  if (index !== 0) {
    return null
  }
  return (
    <form className="signUpForms">
      <InputElement label="First Name" type="text" name="owner_firstName" onChange={onChange} value={state.owner_firstName}  />
      <InputElement label="Middle Name" type="text" name="owner_middleName" onChange={onChange} value={state.owner_middleName}  />
      <InputElement label="Last Name" type="text" name="owner_lastName" onChange={onChange} value={state.owner_lastName}  />
      <InputElement label="Phone Number" type="tel" name="owner_phoneNumber" onChange={onChange} value={state.owner_phoneNumber}  />
      {PrevButton} 
      {NextButton}       
    </form>
  )
}

export default SignUpForms_Owner