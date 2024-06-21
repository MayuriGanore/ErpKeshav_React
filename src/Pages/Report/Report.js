/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Sale_Report from  "../../components/Sale_Report/Sale_Report"
import Purchase_Report from "../../components/Purchase_Report/Purchase_Report"
const Report = () => {
  return (
    <div className='report'>
      <h2>Report Page</h2>
      <Sale_Report/>
      <Purchase_Report/>
    </div>
  )
}

export default Report
