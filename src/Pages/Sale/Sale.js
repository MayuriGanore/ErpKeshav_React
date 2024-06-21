/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import "./Sale.css"
import Newsale from "../../components/Newsale/Newsale";
import Sale_list from "../../components/Sale_list/Sale_list"
const Sale = () => {
  return (
    <div className='sale'>
      <h2>Sales</h2>
      <Newsale/>
      <Sale_list/>
    </div>
  )
}

export default Sale
