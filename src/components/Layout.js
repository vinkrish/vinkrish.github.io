import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    //const rootPath = `${__PATH_PREFIX__}/`
    // if (location.pathname === rootPath)

    let header = (
      <div>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <h2 
            style={{
              fontFamily: `Montserrat, sans-serif`,
              display: `inline-block`,
              marginTop: 0
            }}
          >
            {title}
          </h2>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/blogs/">Blog</ListLink>
        </ul>
      </div>
      )
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
