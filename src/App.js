import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Report from "./Pages/Report/Report";
import Stock from "./Pages/Stock/Stock";
import Purchases from "./Pages/Purchases/Purchase";
import Sale from "./Pages/Sale/Sale";
import Sale_Report from "./components/Sale_Report/Sale_Report";
import Sale_list from "./components/Sale_list/Sale_list";
import Purchase_Report from './components/Purchase_Report/Purchase_Report';
import Invoice from './components/Invoice/Invoice';
import Layout from "./Layout"

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

    return (
        <div className='app'>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/stock" element={<Stock />} />
                    <Route path="/purchases" element={<Purchases />} />
                    <Route path="/sale" element={<Sale />} />
                    <Route path="/report/sale" element={<Sale_Report initialData={salesData} />} />
                    <Route path="/report/purchases" element={<Purchase_Report initialData={salesData} />} />
                    <Route path="/sale/salelist" element={<Sale_list initialData={salesData} />} />
                </Route>
                <Route path="/invoice" element={<Invoice />} />
            </Routes>
        </div>
    );
}

export default App;
