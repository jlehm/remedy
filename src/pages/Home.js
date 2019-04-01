import React from 'react'
import './Home.css'
import './../pages/remedyStyles.css'
import './../components/tiles.css'

import Footer from './../features/Footer.js'
import SignUpFloater from '../components/SignUpFloater.js';


class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <div className="landingCarousel">
            <div className="landing">
            </div>
            <SignUpFloater />
          </div>
          <div className="tiles">
            <div className="tile-lg">
              <div className="serviceTileHeader">Bag Service</div>
              <div className="advertisement">           
                <div className="advertisementLabelTag">starting at</div>
                <div className="advertisementPriceTag">$29.95</div>
                <div className="advertisementTaxTag">plus tax</div>
              </div>
            </div>
            <div className="tile-lg">
              <div className="serviceTileHeader">Bulk Haul-off</div>
              <div className="advertisement">           
                <div className="advertisementLabelTag">starting at</div>
                <div className="advertisementPriceTag">$99.95</div>
                <div className="advertisementTaxTag">plus tax</div>
              </div>
            </div>
            <div className="tile-lg">
              <div className="serviceTileHeader">Junk Removal</div>
              <div className="advertisement">           
                <div className="advertisementLabelTag">starting at</div>
                <div className="advertisementPriceTag">$129.95</div>
                <div className="advertisementTaxTag">plus tax</div>
              </div>
            </div>          
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home
