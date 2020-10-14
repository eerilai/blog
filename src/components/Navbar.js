import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-menu is-lowercase">
            <Link
              className="navbar-item"
              to="/" 
            >
              Blog
            </Link>
            <Link
              className="navbar-item"
              to="fiction" 
            >
              Fiction
            </Link>
            <Link
              className="navbar-item"
              to="art" 
            >
              Art
            </Link>
            <Link
              className="navbar-item"
              to="poetry" 
            >
              Poetry
            </Link>
            <Link
              className="navbar-item"
              to="games" 
            >
              Games
            </Link>
            <Link
              className="navbar-item"
              to="about" 
            >
              About
            </Link>

            {/* {data.allWordpressPage.edges.map(edge => (
              <Link
                className="navbar-item"
                to={edge.node.slug}
                key={edge.node.slug}
              >
                {edge.node.title}
              </Link>
            ))} */}
          </div>
        </div>
      </nav>
    )}
  />
)

export default Navbar
