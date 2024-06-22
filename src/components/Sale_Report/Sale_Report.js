import React, { useState } from 'react';
import './Sale_Report.css'; // Ensure this path is correct

const SaleReport = ({ initialData }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearch = (event) => {
    event.preventDefault();
    const lowerCaseQuery = query.toLowerCase();
    const filtered = initialData.filter(item =>
      item.customerName.toLowerCase().includes(lowerCaseQuery)
    );

    setFilteredData(filtered);
    if (filtered.length > 0) {
      alert('Record found!');
    } else {
      alert('No record found.');
    }
  };

  const handlePrint = (item) => {
    const printContent = `
      Date: ${item.date}\n
      Invoice Number: ${item.invoiceNumber}\n
      Customer Name: ${item.customerName}\n
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

  return (
    <div className="container">
      <div className="salereport">
        <h2>Sales Report</h2>
        <form onSubmit={handleSearch} className="search-container">
          <input
            id="searchBox"
            className="search-box"
            type="search"
            name="query"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <br />
        <hr />
        <br />
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

export default SaleReport;
