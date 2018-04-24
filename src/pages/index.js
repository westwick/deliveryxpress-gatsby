import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
// import AOS from 'aos'
import 'aos/dist/aos.css'
import logoFull from '../img/dx-full.png'
import Img from 'gatsby-image'
import phone from '../img/phone.png'
import forcustomers from '../img/forcustomers.jpg'
import forbusinesses from '../img/forbusinesses.jpg'
import fordrivers from '../img/fordrivers.jpg'

export default class IndexPage extends React.Component {
  componentDidMount() {
    const isBrowser = typeof window !== 'undefined'
    const AOS = isBrowser ? require('aos') : undefined
    AOS.init()
  }
  render() {
    const { data } = this.props
    console.log(data)
    const { edges: posts } = data.allMarkdownRemark
    console.log(data)
    return (
      <div className="home">
        <div className="hero flex-centered" >
          <div className="hero-img-wrap">
            <Img sizes={data.herobg.childImageSharp.sizes} className="herobg" />
          </div>
          <img src={logoFull} alt="DeliveryXpress Logo" className="hero-logo" />
          <h1 className="text-center">Right now delivery</h1>
          <h2 className="text-center">Anything and everything</h2>
          <div className="hero-signup">
            <form>
              <input type="text" placeholder="Full Name" className="name-input" />
              <input type="text" placeholder="Email" className="email-input" />
              <button className="btn-signup">Sign Up</button>
            </form>
          </div>
        </div>
        <section className="section news">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest News</h1>
            </div>
            <div className="posts-wrapper columns">
            {posts
              .filter(post => post.node.frontmatter.templateKey === 'blog-post')
              .map(({ node: post }, index) => (
                <div
                  className="content column"
                  key={post.id}
                >
                  <p className="post-title">
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  <p className="post-date">
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="btn" to={post.fields.slug}>
                      Read More
                    </Link>
                  </p>
                </div>
              ))}
              </div>
          </div>
        </section>
        <section className="app-download section">
          <div className="container">
            <div className="columns">
              <div className="column fed">
                <img src={phone} alt="DeliveryXpress App on Phone" className="img-phone" />
              </div>
              <div className="column fed">
                <h2>Download our official app</h2>
                <p>DeliveryXpress is a technology platform that connects local delivery resources with hiring clients in real-time. Delivery applications range from quick service and restaurant food to a traditional local courier.</p>
                <div className="download-buttons">
                  <button className="btn-black"><i className="fab fa-apple"></i> App Store</button>
                  <button className="btn-red"><i className="fab fa-google-play"></i> Play Store</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="whyus section">
          <div className="container">
            <h2>Why DeliveryXpress?</h2>
            <div className="columns whyus-section is-desktop">
              <div className="column is-8-desktop">
                <img src={forcustomers} data-aos="blurin" />
              </div>
              <div className="column is-4-desktop fed">
                <h3>Customers</h3>
                <p>Anything and everything, Get what you want with right now delivery, Tap a button, get it delivered, Choose your package type and set your location.You'll see your driver's picture and vehicle details, and can track their arrival on the map.</p>
                <Link to="/customers" className="btn">Learn More</Link>
              </div>
            </div>
            <div className="columns row-reverse whyus-section is-desktop">
              <div className="column is-8-desktop">
                <img src={fordrivers} />
              </div>
              <div className="column is-4-desktop fed">
                <h3>Drivers</h3>
                <p>Anything and everything, Get what you want with right now delivery, Tap a button, get it delivered, Choose your package type and set your location.You'll see your driver's picture and vehicle details, and can track their arrival on the map.</p>
                <Link to="/drivers" className="btn">Learn More</Link>
              </div>
            </div>
            <div className="columns whyus-section is-desktop">
              <div className="column is-8-desktop">
                <img src={forbusinesses} />
              </div>
              <div className="column is-4-desktop fed">
                <h3>Businesses</h3>
                <p>Anything and everything, Get what you want with right now delivery, Tap a button, get it delivered, Choose your package type and set your location.You'll see your driver's picture and vehicle details, and can track their arrival on the map.</p>
                <Link to="/businesses" className="btn">Learn More</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    herobg: PropTypes.any,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    herobg: file(id: { regex: "/herobg/" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
