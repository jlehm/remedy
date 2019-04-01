import React from 'react'
import './../components/PasswordChange.css' 


class SignUpFloater extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <div className="signUpFloater">
          <div className="signUpFloaterGroup">
            <div className="signUpFloaterLabel">Sign Up</div>
            <div className="signUpFloaterForm">

            </div>
            <div className="signUpFloaterButton">
              <button className="passwordChangeButton">Button Here</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SignUpFloater