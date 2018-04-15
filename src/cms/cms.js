import CMS from 'netlify-cms'

import CustomersPagePreview from './preview-templates/CustomersPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
//import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('customers', CustomersPagePreview)
CMS.registerPreviewTemplate('businesses', CustomersPagePreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
