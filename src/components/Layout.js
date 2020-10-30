import React from 'react'
import Helmet from 'react-helmet'
import Pagination from './Pagination'

import Navbar from './Navbar'
import './all.sass'

const TemplateWrapper = ({ children, pageContext }) => (
  <div className="page">
    <Helmet title="Jozujanai" />
    <div className="site-title">jozujanai</div>
    <Navbar />
    <div>{children}</div>
    <Pagination pageContext={pageContext} pathPrefix="/" />
  </div>
)

export default TemplateWrapper
