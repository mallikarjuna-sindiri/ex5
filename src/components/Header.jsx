import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div>
      <ul className='con'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/student-details">Student Details</Link></li>
        <li><Link to="/scholarship">Scholarship</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/cgpa">CGPA</Link></li>
        <li><Link to="/upload-material">Upload Material</Link></li>
        <li><Link to="/check-material">Check Material</Link></li>
        <li><Link to="/balance">Balance</Link></li>
        <li><Link to="/transfer">Transfer</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/invoice">Invoice</Link></li>

      </ul>
    </div>
  )
}

export default Header