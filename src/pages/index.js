import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
// import AOS from 'aos'
import 'aos/dist/aos.css'

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
          <h1 className="text-center" data-aos="zoom-in">Right now delivery<span>&trade;</span></h1>
        </div>
        <section className="section" style={{ borderTop: '1px solid #e5e5e5' , background: '#fbfbfb'}}>
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest News</h1>
            </div>
            <div className="posts-wrapper">
            {posts
              .filter(post => post.node.frontmatter.templateKey === 'blog-post')
              .map(({ node: post }, index) => (
                <div
                  data-aos="fade-up" data-aos-offset={120 + (100 * index)}
                  className="content"
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
                    <Link className="button more-button" to={post.fields.slug}>
                      Read More <i className="fas fa-angle-right"></i>
                    </Link>
                  </p>
                </div>
              ))}
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
