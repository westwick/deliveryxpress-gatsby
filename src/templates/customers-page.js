import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const CustomersPageTemplate = ({ image, title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="customers-page">
      <div className="section-head full-width-image-container"
          style={{ backgroundImage: `url(${image})` }}>
        {title}
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="section">
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

CustomersPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CustomersPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <CustomersPageTemplate
      image={post.frontmatter.image}
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

CustomersPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CustomersPage

export const customersPageQuery = graphql`
  query CustomersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        image
        title
      }
    }
  }
`
