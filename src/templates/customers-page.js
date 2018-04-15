import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import 'aos/dist/aos.css'

class CustomersPageTemplate extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const isBrowser = typeof window !== 'undefined'
    const AOS = isBrowser ? require('aos') : undefined
    AOS.init()
  }
  render() {
    const data = this.props
    const PageContent = this.props.contentComponent || Content
  
    return (
      <div className="customers-page">
        <div className="section-head full-width-image-container"
            style={{ background: `linear-gradient(to top, rgba(18,9,9,.96) 0%,rgba(18,9,9,0.24) 100%), url(${data.image}) center center no-repeat`, backgroundSize: 'cover'}}>
          <h2 data-aos="fade-down">{data.title}</h2>
        </div>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="section">
                  <PageContent className="content" content={data.content} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
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
