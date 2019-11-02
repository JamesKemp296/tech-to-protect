import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = props => {
  return(
    <nav id="navbar-container">
      <ul className="nav-links">
        <li id="home"><NavLink exact to="/">Home</NavLink></li>
        <li id="form"><NavLink exact to="/form">form</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
