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
      {/* <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/img/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#5bbad5" /> */}
      <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
      <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
      <meta name="theme-color" content="#f8f8f8" />
      <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet" />
    </Helmet>
    <Navbar />
    <div className="app-main">{children()}</div>
    <Footer />
    <noscript id="deferred-styles">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" />

    </noscript>
    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/4497176.js"></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          var loadDeferredStyles = function() {
          console.log('loaded styles')
          var addStylesNode = document.getElementById("deferred-styles");
          var replacement = document.createElement("div");
          replacement.innerHTML = addStylesNode.textContent;
          document.body.appendChild(replacement)
          addStylesNode.parentElement.removeChild(addStylesNode);
          };
          var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
          if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
          else window.addEventListener('load', loadDeferredStyles);
            `,
      }}
    />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
