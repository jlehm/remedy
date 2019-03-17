import React from 'react'
import './Home.css'

import withAuthorization from './../HOCs/withAuthorization.js'

import SearchContainer from './../containers/SearchContainer.js'
import Footer from './../features/Footer.js'

import SearchProvider from './../containers/SearchProvider.js'

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <SearchProvider>
          <SearchContainer {...this.props} />
          <Footer {...this.props} />
        </SearchProvider>
      </div>
    )
  }
}

const condition = authUser => !!authUser

export default withAuthorization(condition)(Home)
