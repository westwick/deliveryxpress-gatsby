import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
// import AOS from 'aos'
import 'aos/dist/aos.css'
import logoFull from '../img/dx-full.png'

export default class IndexPage extends React.Component {
  componentDidMount() {
    const isBrowser = typeof window !== 'undefined'
    const AOS = isBrowser ? require('aos') : undefined
    AOS.init()
  }
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="home">
        <div className="hero flex-centered" >
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
        <section className="whyus section">
          <div className="container">
            <h2>Why DeliveryXpress?</h2>
            <div className="columns whyus-section">
              <div className="column is-8">
                <img src="http://placekitten.com/600/201" />
              </div>
              <div className="column is-4 fed">
                <h3>Customers</h3>
                <p>Letraset, a French lettering company, popularized the Lorem Ipsum passage in the 1960s with their dry-transfer sheets.</p>
                <Link to="/customers" className="btn">Learn More</Link>
              </div>
            </div>
            <div className="columns row-reverse whyus-section">
              <div className="column is-8">
                <img src="http://placekitten.com/600/200" />
              </div>
              <div className="column is-4 fed">
                <h3>Drivers</h3>
                <p>Letraset, a French lettering company, popularized the Lorem Ipsum passage in the 1960s with their dry-transfer sheets.</p>
                <Link to="/drivers" className="btn">Learn More</Link>
              </div>
            </div>
            <div className="columns whyus-section">
              <div className="column is-8">
                <img src="http://placekitten.com/600/202" />
              </div>
              <div className="column is-4 fed">
                <h3>Businesses</h3>
                <p>Letraset, a French lettering company, popularized the Lorem Ipsum passage in the 1960s with their dry-transfer sheets.</p>
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
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
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
