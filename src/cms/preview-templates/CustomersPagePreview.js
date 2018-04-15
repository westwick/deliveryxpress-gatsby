import React from 'react'
import PropTypes from 'prop-types'
import { CustomersPageTemplate } from '../../templates/customers-page'

const CustomersPagePreview = ({ entry, widgetFor }) => (
  <CustomersPageTemplate
    image={entry.getIn(['data', 'image'])}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

CustomersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CustomersPagePreview
