import React from 'react';
import logoimage from '../../assets/logo.jpg';

const PrintReceipt = ({item}) => {
  return (
    <div style={{paddingLeft:"30px"}}>
    <div style={{ display: 'flex', alignItems: 'center',gap:'300px' }}>
      <div style={{ marginRight: '10px' }}>
        <p><strong>Keshavraj Udyog pvt ltd</strong></p>
        <p>At post-Majalgoan, District-Beed, Maharashtra</p>
        <p>Phone no. 0000000000</p>
        <p>Email: Keshavraj.Udyog@gmail.com</p>
      </div>
      <img style={{ height: '70px', width: '70px' }} className='imagelogo' src={logoimage} alt='Logo' />
    </div>
    <hr/>
    <h1><strong>Tax Invoice</strong></h1>
    <div className='invoice_head' style={{ display: 'flex', alignItems: 'center',gap:'500px' }}>
      <div className='leftinvoice_head' style={{ marginRight: '10px' }}>
      <p><strong>Bill to</strong></p>
      <p>{item.customerName}</p>
      </div>
      <div className='rightinvoice_head'>
        <p>Invoice No:<span>{item.invoiceNumber}</span></p>
        <p>Date:<span>{item.date}</span></p>
      </div>
    </div>
    <table>
      
    </table>
    </div>
  );
};

export default PrintReceipt;
