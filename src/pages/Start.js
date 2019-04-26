import React from 'react'
import SignUpForms_Owner from './../components/SignUpForms_Owner.js'
import SignUpForms_Billing from './../components/SignUpForms_Billing.js'
import SignUpForms_Service from './../components/SignUpForms_Service.js'
import SignUpForms_Payment from './../components/SignUpForms_Payment.js'

const Start = () => (
  <React.Fragment>
    <SignUpForms_Owner />
    <SignUpForms_Service />
    <SignUpForms_Billing />
    <SignUpForms_Payment />
  </React.Fragment>
)

export default Start
