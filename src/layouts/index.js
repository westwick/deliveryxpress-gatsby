import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>DeliveryXpress</title>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous" />
      <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/img/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/img/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#f8f8f8" />
    </Helmet>
    <Navbar />
    <div className="app-main">{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
