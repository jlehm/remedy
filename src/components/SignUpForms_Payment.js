import React from 'react'
import InputElement from './../components/InputElement.js'

const SignUpForms_Payment = () => (
  <React.Fragment>
    <InputElement label="Cardholder Name is the same as Account Owner Name" type="checkbox" name=""  />      
    <InputElement label="Cardholder Name" type="text" name="cardAddress1"  />
    <InputElement label="Card Number" type="text" name="cardAddress1"  />    
    <InputElement label="Card Expiration" type="text" name="cardAddress1"  />
    <InputElement label="Card CSV" type="text" name="cardAddress1"  />
    <InputElement label="Card Billing Address is the same as Account Billing Address" type="checkbox" name=""  />    
    <InputElement label="Card Address" type="text" name="cardAddress1"  />
    <InputElement label="Card Address" type="text" name="cardAddress2"  />
    <InputElement label="Card City" type="text" name="cardCity"  />
    <InputElement label="Card State" type="text" name="cardState"  />
    <InputElement label="Card Zipcode" type="text" name="cardState"  />
  </React.Fragment>
)

export default SignUpForms_Payment