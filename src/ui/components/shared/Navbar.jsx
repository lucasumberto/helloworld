import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ 
      padding: '10px', 
      backgroundColor: '#f0f0f0', 
      marginBottom: '20px',
      display: 'flex',
      gap: '15px'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>Sobre</Link>
    </nav>
  )
}

export default Navbar