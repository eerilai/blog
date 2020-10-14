import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div className="page">
    <Helmet title="Jozujanai" />
    <div className="site-title">jozujanai</div>
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
