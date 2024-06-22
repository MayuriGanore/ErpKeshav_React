import React from 'react';

const PrintReceipt = ({ item }) => {
  return (
    <div style={{ margin: '20px' }}>
      <h2>Sales Report</h2>
      <p>Date: {item.date}</p>
      <p>Invoice Number: {item.invoiceNumber}</p>
      <p>Customer Name: {item.customerName}</p>
      <p>Transaction Type: {item.transactionType}</p>
      <p>Payment Mode: {item.paymentMode}</p>
      <p>Amount: {item.amount}</p>
      <p>Balance Due: {item.balanceDue}</p>
      <p>Total Amount: {item.totalAmount}</p>
    </div>
  );
};

export default PrintReceipt;
