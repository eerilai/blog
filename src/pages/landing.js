import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const PageTemplate = ({ title, content }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {/* {title} */}
              </h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Landing = () => {

  return (
    <div className="landing-page">
      <div className="site-title landing-title">jozujanai</div>
      <div className="enter-button">
        <div className="enter-button-main enter-button-ripple"/>
        <div className="enter-button-main"/>
      </div>
      <div className="enter-button-text">vvv</div>
    </div>
  )
}

// Landing.propTypes = {
//   data: PropTypes.object.isRequired,
// }

export default Landing

// export const pageQuery = graphql`
//   query PageById($id: String!) {
//     wordpressPage(id: { eq: $id }) {
//       title
//       content
//     }
//   }
// `