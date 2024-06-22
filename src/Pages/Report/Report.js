/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Sale_Report from  "../../components/Sale_Report/Sale_Report"
import Purchase_Report from "../../components/Purchase_Report/Purchase_Report"
const Report = () => {
  const salesData = [
    {
      date: '2024-06-20',
      invoiceNumber: 'INV12345',
      customerName: 'John Doe',
      transactionType: 'Sale',
      paymentMode: 'Credit Card',
      amount: 100,
      balanceDue: 20,
      totalAmount: 110,
    },
  ];
  return (
    <div className='report'>
      <Sale_Report initialData={salesData}/>
      <Purchase_Report initialData={salesData}/>
    </div>
  )
}

export default Report
