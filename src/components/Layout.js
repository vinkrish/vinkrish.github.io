import React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { rhythm } from '../utils/typography'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    // const isRootPath = location.pathname === `${__PATH_PREFIX__}/`
    // const pageNumber = location.pathname
    //   .split('/')
    //   .filter(Boolean)
    //   .pop()
    // const isPaginatedPath = pageNumber && Boolean(pageNumber.match(/^[0-9]+$/))

    // if (isRootPath || isPaginatedPath) {
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
          <ListLink to="/blogs/1">Blog</ListLink>
        </ul>
      </div>
      )
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(26),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }}
      >
        {header}
        {children}
        <footer>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label>
                <input
                  type="checkbox"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                />{' '}
                Dark mode
              </label>
            )}
          </ThemeToggler>
          <br></br>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
