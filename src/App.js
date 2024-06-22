import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./Pages/Home/Home"
import Report from "./Pages/Report/Report"
import Stock from "./Pages/Stock/Stock"
import Purchases from "./Pages/Purchases/Purchase"
import Sale from "./Pages/Sale/Sale"
import Sale_Report from "./components/Sale_Report/Sale_Report"
import Purchase_Report from './components/Purchase_Report/Purchase_Report';
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
  ];
  return (
    <div className='app'>
      <Sidebar/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path="/report" element={<Report></Report>}/>
        <Route path='/stock' element={<Stock></Stock>}/>
        <Route path='/purchases' element={<Purchases></Purchases>}/>
        <Route path='/sale' element={<Sale></Sale>}/>
        <Route path='/report/sale' element={<Sale_Report initialData={salesData}></Sale_Report>}/>
        <Route path='/report/purchases' element={<Purchase_Report initialData={salesData}></Purchase_Report>}/>
      </Routes>
    </div>
  );
}

export default App;
