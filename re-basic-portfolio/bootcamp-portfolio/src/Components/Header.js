import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={headerStyle} >
      <h1>Casey Carroll</h1>
      <Link style={linkStyle} to="/">About</Link> | <Link style={linkStyle} to="/portfolio">Portfolio</Link> | <Link style={linkStyle} to="/contact">Contact</Link>
    </header>
  )
}

const headerStyle = {
  background: '#ecf0f1',
  padding: '10px'
}

const linkStyle = {
  color: '#2c3e50'
}

export default Header

