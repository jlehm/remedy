import React from 'react'

import { withFirebase } from './../containers/FirebaseContext.js'
import './SignOutButton.css'

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut} className="signOutButton">
    Sign Out
  </button>
)

export default withFirebase(SignOutButton)
