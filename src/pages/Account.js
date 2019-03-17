import React from 'react'
import withAuthorization from './../HOCs/withAuthorization.js'

import ProfileImage from './../components/ProfileImage.js'

import PasswordForgetForm from './../components/PasswordForget.js'
import PasswordChangeForm from './../components/PasswordChange.js'

import './../pages/Account.css'

const AccountPage = () => (
  <React.Fragment>  
    <div className="passwordReset">
      <h2>Password Reset</h2>
      <PasswordForgetForm />
      <PasswordChangeForm />
    </div>
  </React.Fragment>
)

const condition = authUser => !!authUser

export default withAuthorization(condition)(AccountPage)
