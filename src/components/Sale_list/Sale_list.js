import React, { useState, useEffect } from 'react';
import "./Sale_list.css";

const SalesList = ({ initialData }) => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const storedInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
        setInvoices(storedInvoices.length > 0 ? storedInvoices : initialData);
    }, [initialData]);

    const handleViewInvoice = (index) => {
        sessionStorage.setItem('selectedInvoice', JSON.stringify(invoices[index]));
        const newTab = window.open('/invoice', '_blank');
        newTab.focus();
    };

    return (
        <div className="container">
            <h1>Sales List</h1>
            <div className='container2'>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Invoice No.</th>
                            <th>Date</th>
                            <th>Customer Name</th>
                            <th>Total Amount (₹)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((invoice, index) => (
                            <tr key={index}>
                                <td>{invoice.invoiceNo}</td>
                                <td>{invoice.date}</td>
                                <td>{invoice.customerName}</td>
                                <td>{invoice.totalAmount}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => handleViewInvoice(index)}>View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesList;
