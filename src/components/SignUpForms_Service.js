import React from 'react'
import InputElement from './../components/InputElement.js'

const SignUpForms_Service = () => (
  <React.Fragment>
    <InputElement label="Service Address" type="text" name="serviceAddress1"  />
    <InputElement label="Service Address" type="text" name="serviceAddress2"  />
    <InputElement label="Service City" type="text" name="serviceCity"  />
    <InputElement label="Service State" type="text" name="serviceState"  />
    <InputElement label="Serice Zipcode" type="text" name="serviceZipcode"  />
  </React.Fragment>
)

export default SignUpForms_Service