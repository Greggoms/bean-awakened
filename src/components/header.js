import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./Logo"

const Header = () => (
  <header className="header">
    <Link className="logo" to="/">
      <Logo />
    </Link>
    <nav className="nav">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/new">New</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
