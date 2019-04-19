import React from 'react'
import InputElement from './../components/InputElement.js'
import ButtonElement from './../components/ButtonElement.js'

const SignUpForms_Service = ({ state, onChange, onSubmit }) => (
  <form className="signUpForms">
    <InputElement label="Service Address" type="text" name="service_address1" onChange={onChange} value={state.service_address1}  />
    <InputElement label="Service Address" type="text" name="service_address2" onChange={onChange} value={state.service_address2}  />
    <InputElement label="Service City" type="text" name="service_city" onChange={onChange} value={state.service_city}  />
    <InputElement label="Service State" type="text" name="service_state" onChange={onChange} value={state.service_state}  />
    <InputElement label="Serice Zipcode" type="text" name="service_zipcode" onChange={onChange} value={state.service_zipcode}  />
    <ButtonElement label="submit" onSubmit={onSubmit} />
  </form>
)

export default SignUpForms_Service