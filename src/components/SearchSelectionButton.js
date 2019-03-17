import React from 'react'
import './SearchSelectionButton.css'
import ArrowLeftSVG from './ArrowLeftSVG.js'
import ArrowRightSVG from './ArrowRightSVG.js'


const SearchSelectionButton = ({advancedSearch, toggleSearchSelectionButton}) => {
  if (!advancedSearch===true) {
    return (<div className="searchSelectionButton" onClick={toggleSearchSelectionButton}>advanced search<ArrowRightSVG /></div>)
  } else {
    return (<div className="searchSelectionButton" onClick={toggleSearchSelectionButton}><ArrowLeftSVG />basic search</div>)
  }
}

export default SearchSelectionButton
