import React from 'react'
import './SearchClearInputButton.css'

const SearchClearInputButton = ({searchInput, triggerSearchClearInputButton}) => {
  return (
    (searchInput)?
    (<button c
      className="searchClearInputButton" onClick={triggerSearchClearInputButton}>clear</button>):
    (null)
  )
}

export default SearchClearInputButton
