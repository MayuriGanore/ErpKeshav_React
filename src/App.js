import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Product_list from './components/Product_list/Product_list';
import Report from "./Pages/Report/Report";
import Stock from "./Pages/Stock/Stock";
import Purchases from "./Pages/Purchases/Purchase";
import Sale from "./Pages/Sale/Sale";
import Sale_Report from "./components/Sale_Report/Sale_Report";
import Sale_list from "./components/Sale_list/Sale_list";
import Purchase_Report from './components/Purchase_Report/Purchase_Report';
import Invoice from './components/Invoice/Invoice';
import Add_Product from "./components/Add_Product/Add_Product";
import Dashboard from './components/dashboard/dashboard'; 
import Layout from "./Layout";
import Newsale from './components/Newsale/Newsale';

function App() {
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
        {
            date: '2023-03-21',
            invoiceNumber: 'INV12346',
            customerName: 'abc',
            transactionType: 'Sale',
            paymentMode: 'Debit Card',
            amount: 1200,
            balanceDue: 210,
            totalAmount: 1410,
        },
        {
            date: '2021-04-21',
            invoiceNumber: 'INV12347',
            customerName: 'xyz',
            transactionType: 'Sale',
            paymentMode: 'Cash',
            amount: 1000,
            balanceDue: 200,
            totalAmount: 1200,
        },
    ];
    const dummyInvoice = {
        customerName: 'Jane Smith',
        totalAmount: 2500,
        items: [
            { itemName: 'Product A', hsn: '1234', quantity: 2, pricePerUnit: 500, total: 1000 },
            { itemName: 'Product B', hsn: '5678', quantity: 3, pricePerUnit: 500, total: 1500 },
        ],
    };

    return (
        <div className='app'>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/dashboard" />} />
                    <Route path='/dashboard' element={<Dashboard />} />  {/* Corrected Dashboard route */}
                    <Route path="/report" element={<Report />} />
                    <Route path="/stock" element={<Stock />} />
                    <Route path="/purchases" element={<Purchases />} />
                    <Route path="/sale" element={<Sale />} />
                    <Route path="/report/sale" element={<Sale_Report initialData={salesData} />} />
                    <Route path="/report/purchases" element={<Purchase_Report initialData={salesData} />} />
                    <Route path="/sale/newsale" element={<Newsale initialInvoice={dummyInvoice} />} />
                    <Route path="/sale/salelist" element={<Sale_list initialData={salesData} />} />
                    <Route path="/stock/addproduct" element={<Add_Product />} />
                    <Route path='/product/productlist' element={<Product_list/>}/>
                </Route>
                <Route path="/invoice" element={<Invoice />} />
            </Routes>
        </div>
    );
}

export default App;
