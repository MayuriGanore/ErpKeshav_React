import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2>Sidebar</h2>
      <ul>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/stock" >Stock</Link>
        <br></br>
        <Link to="/sale">Sales</Link>
        <br></br>
        <Link to="/purchases">Purchases</Link>
        <br></br>
        <Link to="/report">Report</Link>
      </ul>
    </div>
  )
}

export default Sidebar
