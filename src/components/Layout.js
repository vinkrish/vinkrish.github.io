import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import DarkModeToggle from './DarkModeToggle'

const ListLink = ({ to, children }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={to}>{children}</Link>
  </li>
)

const Layout = ({ location, title, children }) => {
  const header = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap', 
        marginBottom: rhythm(1.0),
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            {title}
          </h2>
        </Link>
      </div>
      <div style={{ display: `flex`, alignItems: 'center', gap: '1rem' }}>
        <DarkModeToggle />
        <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/blogs/1">Blog</ListLink>
        </ul>
      </div>
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
        <br />
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
