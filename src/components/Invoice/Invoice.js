import React, { useEffect, useState } from 'react';
import './Invoice.css'; // Import the CSS file

const Invoice = () => {
    const [customerName, setCustomerName] = useState('');
    const [invoiceData, setInvoiceData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const invoice = JSON.parse(sessionStorage.getItem('selectedInvoice'));
        if (invoice && Array.isArray(invoice.items)) {
            setCustomerName(invoice.customerName);
            setInvoiceData(invoice.items);
            setTotalAmount(invoice.totalAmount);
        }
    }, []);

    return (
        <div className="container">
            <h2>Generated Invoice</h2>
            <div className="row">
                <div className="col-md-6">
                    <h2>Keshavraj Udyog Pvt Ltd</h2>
                    <h4>At post-majalgaon, District-Beed, Maharashtra <br />
                        Phone no: 000000000 <br />
                        Email: keshavraj.udyog@gmail.com</h4>
                </div>
            </div>
            <hr />
            <h2 align="center">Tax Invoice</h2>
            <div className="invoice-details">
                <div className="row">
                    <div className="col-md-6">
                        <span>Invoice No.:</span>
                        <span>1</span>
                    </div>
                    <div className="col-md-6 text-right">
                        <span>Date:</span>
                        <span>{new Date().toISOString().split('T')[0]}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <span>Bill To:</span>
                        <span>{customerName}</span>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Item Name</th>
                                    <th>HSN/SAC</th>
                                    <th>Quantity</th>
                                    <th>Price/Unit (₹)</th>
                                    <th>Total (₹)</th>
                                </tr>
                            </thead>
                            <tbody className="invoice-items">
                                {invoiceData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.itemName}</td>
                                        <td>{item.hsn || ''}</td>
                                        <td>{item.quantity}</td>
                                        <td>₹ {item.pricePerUnit}</td>
                                        <td>₹ {item.total}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="4" style={{ textAlign: 'right' }}><strong>Total (₹)</strong></td>
                                    <td><strong>₹ {totalAmount}</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="clearfix"></div>

            <div className="row mt-4">
                <div className="col-md-8">
                    <div className="invoice-terms">
                        <h3>Terms and Conditions</h3>
                        <p>Your terms and conditions here.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="subtotal-form">
                        <h2>Sub Total</h2>
                        <div className="form-group">
                            <label htmlFor="total">Total:</label>
                            <input type="number" id="total" value={totalAmount} className="form-control" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="received">Received:</label>
                            <input type="number" id="received" className="form-control" />
                        </div>
                        <div className="form-group balance">
                            <label htmlFor="balance">Balance:</label>
                            <span id="balance" className="form-control">{totalAmount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invoice;
