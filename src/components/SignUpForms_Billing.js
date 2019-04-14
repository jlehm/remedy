import React from 'react'
import InputElement from './../components/InputElement.js'

const SignUpForms_Billing = () => (
  <React.Fragment>
    <InputElement label="Billing Address is the same as Service Address" type="checkbox" name=""  />
    <InputElement label="Billing Address" type="text" name="billingAddress1"  />
    <InputElement label="Billing Address" type="text" name="billingAddress2"  />
    <InputElement label="Billing City" type="text" name="billingCity"  />
    <InputElement label="Billing State" type="text" name="billingState"  />
    <InputElement label="Billing Zipcode" type="text" name="billingZipcode"  />
  </React.Fragment>
)

export default SignUpForms_Billing