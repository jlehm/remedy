import React from 'react'
import InputElement from './../components/InputElement.js'

const SignUpForms_Billing = ({ state, onChange }) => (
  <form>
    <InputElement label="Billing Address is the same as Service Address" type="checkbox" name=""  />
    <InputElement label="Billing Address" type="text" name="billing_address1" onChange={onChange} value={state.billing_address1}  />
    <InputElement label="Billing Address" type="text" name="billing_address2" onChange={onChange} value={state.billing_address2}  />
    <InputElement label="Billing City" type="text" name="billing_city" onChange={onChange} value={state.billing_city}  />
    <InputElement label="Billing State" type="text" name="billing_state" onChange={onChange} value={state.billing_state}  />
    <InputElement label="Billing Zipcode" type="text" name="billing_zipcode" onChange={onChange} value={state.billing_zipcode}  />
  </form>  
)

export default SignUpForms_Billing