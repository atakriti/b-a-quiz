import React from 'react'
import {Link} from "react-router-dom"
import "./header.scss"
import logo from "../images/logo.png"
function Header() {
  return (
      <header>
          <div className="logo">
              <Link to="/" ><img src={logo} alt="" /></Link>
          </div>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
          </nav>
    </header>
  )
}

export default Header