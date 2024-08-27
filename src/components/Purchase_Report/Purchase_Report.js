/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react';
import "./Purchase_Report.css"
import PrintReceipt from '../../components/PrintReceipt/PrintReceipt';

const PurchaseReport = ({ initialData }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);
  const [searchOption, setSearchOption] = useState('customerName');
  const [sortOption, setSortOption] = useState('customerName');

  useEffect(() => {
    setFilteredData(initialData);
  }, [initialData]);

  const handleSearch = (event) => {
    event.preventDefault();
    const lowerCaseQuery = query.toLowerCase();

    const filtered = initialData.filter(item => {
      switch (searchOption) {
        case 'customerName':
          return item.customerName.toLowerCase().includes(lowerCaseQuery);
        case 'date':
          return item.date.toLowerCase().includes(lowerCaseQuery);
        case 'invoiceNumber':
          return item.invoiceNumber.toLowerCase().includes(lowerCaseQuery);
        case 'transactionType':
          return item.transactionType.toLowerCase().includes(lowerCaseQuery);
        case 'paymentMode':
          return item.paymentMode.toLowerCase().includes(lowerCaseQuery);
        case 'amount':
          return item.amount.toString().toLowerCase().includes(lowerCaseQuery);
        case 'totalAmount':
          return item.totalAmount.toString().toLowerCase().includes(lowerCaseQuery);
        default:
          return false;
      }
    });

    setFilteredData(filtered);
    if (filtered.length > 0) {
      alert('Record found!');
    } else {
      alert('No record found.');
    }
  };

  const handleSort = (event) => {
    const sortOption = event.target.value;
    setSortOption(sortOption);
    const sortedData = [...filteredData].sort((a, b) => {
      switch (sortOption) {
        case 'customerName':
          return a.customerName.localeCompare(b.customerName);
        case 'date':
          return new Date(a.date) - new Date(b.date);
        case 'invoiceNumber':
          return a.invoiceNumber.localeCompare(b.invoiceNumber);
        case 'transactionType':
          return a.transactionType.localeCompare(b.transactionType);
        case 'paymentMode':
          return a.paymentMode.localeCompare(b.paymentMode);
        case 'amount':
          return a.amount - b.amount;
        case 'totalAmount':
          return a.totalAmount - b.totalAmount;
        default:
          return 0;
      }
    });
    setFilteredData(sortedData);
  };

  const handlePrint = (item) => {
    const printContent = `
      Date: ${item.date}\n
      Invoice Number: ${item.invoiceNumber}\n
      Supplier Name: ${item.supplierName}\n
      Transaction Type: ${item.transactionType}\n
      Payment Mode: ${item.paymentMode}\n
      Amount: ${item.amount}\n
      Balance Due: ${item.balanceDue}\n
      Total Amount: ${item.totalAmount}\n
    `;
    const printWindow = window.open('', '', 'height=400,width=600');
    printWindow.document.write('<pre>' + printContent + '</pre>');
    printWindow.document.close();
    printWindow.print();
  };
const getPlaceholderText = () => {
    switch (searchOption) {
      case 'customerName':
        return 'Search by Customer Name';
      case 'date':
        return 'Search by Date';
      case 'invoiceNumber':
        return 'Search by Invoice Number';
      case 'transactionType':
        return 'Search by Transaction Type';
      case 'paymentMode':
        return 'Search by Payment Mode';
      case 'amount':
        return 'Search by Amount';
      case 'totalAmount':
        return 'Search by Total Amount';
      default:
        return 'Search...';
    }
  };
  return (
    <div className="container">
      <div className="purchasereport">
        <form onSubmit={handleSearch} className="search-container">
          <input
            id="searchBox"
            className="search-box"
            type="search"
            name="query"
            placeholder={getPlaceholderText()}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <hr/>
        <table className="table" id="purchaseTable">
          <thead>
            <tr>
              <th>Date</th>
              <th>Invoice Number</th>
              <th>Customer Name</th>
              <th>Transaction Type</th>
              <th>Payment Mode</th>
              <th>Amount</th>
              <th>Balance Due</th>
              <th>Total Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.invoiceNumber}</td>
                <td>{item.customerName}</td>
                <td>{item.transactionType}</td>
                <td>{item.paymentMode}</td>
                <td>{item.amount}</td>
                <td>{item.balanceDue}</td>
                <td>{item.totalAmount}</td>
                <td>
                  <button onClick={() => handlePrint(item)}>Print</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseReport;
