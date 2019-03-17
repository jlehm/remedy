import React from 'react'
import BrandSmaller from './../components/BrandSmaller.js'
import Copyright from './../components/Copyright.js'
import FooterMenu from './../components/FooterMenu.js'

import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <BrandSmaller />
        <Copyright />
        <FooterMenu />
      </div>
    )
  }
}

export default Footer
