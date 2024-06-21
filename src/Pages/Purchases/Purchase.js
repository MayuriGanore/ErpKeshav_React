/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import NewBuy from "../../components/NewBuy/NewBuy"
import Purchase_list from  "../../components/Purchase_list/Purchase_list"
const Purchase = () => {
  return (
    <div className='purchase'>
      <h2>Purchase Page</h2>
      <NewBuy/>
      <Purchase_list/>
    </div>
  )
}

export default Purchase
