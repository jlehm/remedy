import React from 'react'
import './Search.css'

import SearchBar from './../components/SearchBar.js'

const Search = props => {
  return (
    (props.advancedSearch)?
    (<SearchBar {...props} />):
    (<SearchBar {...props} />)
  )
}

export default Search
