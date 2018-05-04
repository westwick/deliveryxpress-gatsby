import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logonew.png'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
  }
  toggleModalOn = () => {
    console.log('um')
    this.setState({ showModal: true })
  }
  toggleModalOff = () => {
    this.setState({ showModal: false })
  }
  render() {
    return (
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
                <a className="navitem-register" onClick={this.toggleModalOn}>
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={'modal ' + (this.state.showModal ? 'is-active' : '')}>
          <div className={'modal-background ' + (this.state.showModal ? 'modal-background-on' : '')} onClick={this.toggleModalOff}></div>
          <div className={'modal-content ' + (this.state.showModal ? 'modal-content-on' : '')}>
            <h2>Launching Soon!</h2>
            <p style={{marginBottom: '30px'}}>Join our mailing list and be among the first to use our new app!</p>
            <div className="modal-signup">
              <form onSubmit={this.handleFormSubmit} method="post" action="/?submit=true">
                <input type="text" name="name" placeholder="Full Name" className="name-input" required />
                <input type="email" name="email" placeholder="Email" className="email-input" required />
                <button className="btn-signup">Sign Up</button>
              </form>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.toggleModalOff}></button>
        </div>
      </nav>
    )
  }
}
