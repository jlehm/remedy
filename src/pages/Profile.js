import React from 'react'
import './Profile.js'

import { withFirebase } from './../containers/FirebaseContext.js'

import ProfileImage from './../components/ProfileImage.js'
import './../components/ProfileImage.css'


const ProfileInfo = () => {
  return (
    <div className="profile">
      Profile
      <ProfileImage />
    </div>
  )
}

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      userObject: null,
    }
  }
  componentDidMount() {
    this.props.firebase.user().on('value', snapshot => {
      const userObj = snapshot.val()
      this.setState({
        userObject: userObj
      })
    })
  }
  componentWillUnmount() {
    this.props.firebase.user().off()
  }
  render() {
    return(
      <ProfileInfo />
    )
  }
}

export default withFirebase(Profile)
