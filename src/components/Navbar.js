import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logonew.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="DeliveryXpress Logo" />
          </figure>
        </Link>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-menu">
          <Link className="navbar-item" to="/customers" activeClassName="nav-active">
            Customers
          </Link>
          <Link className="navbar-item" to="/drivers" activeClassName="nav-active">
            Drivers
          </Link>
          <Link className="navbar-item" to="/businesses" activeClassName="nav-active">
            Businesses
          </Link>
          <div className="nav-item flex-centered">
            <a className="navitem-register">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
