import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import './Sale_Report.css'; 
import PrintReceipt from '../../components/PrintReceipt/PrintReceipt'; // Adjust path as per your project structure

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
    const printWindow = window.open('', '', 'height=400,width=600');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    const printableComponent = <PrintReceipt item={item} />;
    const componentHtml = ReactDOMServer.renderToStaticMarkup(printableComponent);
    printWindow.document.write(componentHtml);
    printWindow.document.write('</body></html>');
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
