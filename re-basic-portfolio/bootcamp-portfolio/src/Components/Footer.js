import React from 'react'

function Footer() {
  return (
    <div>
      <footer style={footerStyle}>

      </footer>
    </div>
  )
}

const footerStyle = {
  background: "#2C3E50",
  height: '75px',
  borderTop: '8px solid',
  borderColor: '#2980B9',
  position: 'absolute',
  bottom: '0',
  width: '100%',
  // clear: 'both'
}

export default Footer
