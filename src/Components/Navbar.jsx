import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
    <p>¡Pizzeria Mamma Mia!</p>
    <div className='nav-button'>
        <button>🍕Home</button>
        <button>🔐Login</button>
        <button>🔐Register</button>
        </div>
        <button className='total-btn'>🛒Total:$25.000</button>
        </div>
    </>
  )
}

export default Navbar