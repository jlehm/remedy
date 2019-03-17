import React from 'react'
import Category from './../components/Category.js'
import ArrowButton from './../components/ArrowButton.js'
import ArrowLeftSVG from './../components/ArrowLeftSVG.js'
import ArrowRightSVG from './../components/ArrowRightSVG.js'
import './Categories.css'

class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImageIndex: 0
    }
    this.previousSlide = this.previousSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
  }
  previousSlide() {
    this.setState({currentImageIndex: this.state.currentImageIndex-1})
  }
  nextSlide() {
    this.setState({currentImageIndex: this.state.currentImageIndex+1})
  }

  render() {
    let categories = this.props.categories
    return(
    <div>
      <div className="categoriesHeader">Find your next adventure</div>
      <div className="categories">
        <div className="categoriesContainer">
          <ArrowButton
            direction={"left"}
            clickFunction={this.previousSlide}
            glyph={<ArrowLeftSVG />}
          />
            {categories.map((category) => {
              return (
                <Category key={category.label} data={category} />
              )
            })}
          <ArrowButton
            direction={"right"}
            clickFunction={this.nextSlide}
            glyph={<ArrowRightSVG />}
          />
        </div>
      </div>
    </div>
    )
  }
}

export default Categories
