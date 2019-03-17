import React from 'react'
import Activity from './../components/Activity.js'
import './Recommended.css'

const Recommended = ({data}) => {
  return (
    <div className="recommended">
      <div className="recommendedHeader">Recommended</div>
      <ul>
        {data.map((data)=>{
          return (<Activity key={data.id} thumb={data.thumb} title={data.title} text={data.text} rating={data.rating} price={data.price} />)
        })}
      </ul>
    </div>
  )
}

export default Recommended
