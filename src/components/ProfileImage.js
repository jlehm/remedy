import React from 'react'
import './ProfileImage.css'

const ProfileImage =({image}) => {
  const style = {
    backgroundImage: `url(${image})`,

  }
  return (
    <div className="profileImage" style={style}>

    </div>
  )
}

export default ProfileImage
