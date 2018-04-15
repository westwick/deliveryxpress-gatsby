import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/dx.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="DeliveryXpress Logo" />
          </figure>
        </Link>
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/about" activeClassName="nav-active">
          Customers
        </Link>
        <Link className="navbar-item" to="/products" activeClassName="nav-active">
          Drivers
        </Link>
        <Link className="navbar-item" to="/products" activeClassName="nav-active">
          Businesses
        </Link>
        <div className="nav-item flex-centered">
          <Link className="navitem-register" to="/products" activeClassName="nav-active">
            Register
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
