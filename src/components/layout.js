import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: `var(--size-content)`,
        margin: `0 auto`,
        padding: `var(--size-gutter)`,
      }}
    >
      <header style={{ marginBottom: `1.5rem` }}>
        <Link
          to="/"
          style={{
            fontSize: `var(--font-lg)`,
            textDecoration: `none`,
          }}
        >
          BloggerQinQin
        </Link>
        <nav style={{ marginTop: '1rem' }}>
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0, gap: '1rem' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >
        © {new Date().getFullYear()} BloggerQinQin, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout 