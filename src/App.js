import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./Pages/Home/Home"
import Report from "./Pages/Report/Report"
import Stock from "./Pages/Stock/Stock"
import Purchases from "./Pages/Purchases/Purchase"
import Sale from "./Pages/Sale/Sale"
function App() {
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
      </Routes>
    </div>
  );
}

export default App;
