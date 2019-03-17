import React from 'react'
import './SearchDropdown.css'

const SearchDropdownListItem = ({listItem}) => {
  return (
    <React.Fragment>
      <li className="searchDropdownListItem">{listItem}</li>
    </React.Fragment>
  )
}

const SearchDropdownList = ({listItems}) => {
  return (
    <React.Fragment>
      {listItems.map((item)=>{
        return (
        <SearchDropdownListItem listItem={item} />
        )}
      )}
    </React.Fragment>
  )
}

const SearchDropdown = props => {
  return (
    <div className="searchDropdown">
      <ul className="searchDropdownList">
        <SearchDropdownList {...props} />
      </ul>
    </div>
  )
}

export default SearchDropdown
