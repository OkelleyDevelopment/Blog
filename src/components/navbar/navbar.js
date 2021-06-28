import React from "react"
import { Link } from "gatsby"
import "./navbar.css"

const Navbar = props => {

  const navMenuItem = ["Landing", "About", "Blog", "Contact"]

  const navListing = navMenuItem.map(item => {
    let pagelink = ""
    if (item === "Landing") {
      pagelink = "/"
    } else {
      pagelink = "/" + item.toLowerCase() + "/"
    }

    return (
      <li key={pagelink}>
        <Link
          to={pagelink}
          className="page-link"
          style={{
            boxShadow: `none`,
            textDecoration: `1px underline`,
            color: `inherit`,
          }}
        >
          {item}
        </Link>
      </li>
    )
  })

  return (
    <nav className="navbar">
      <div className="navbar-item" style={{ align: `right` }}>
        <ul>{navListing}</ul>
      </div>
    </nav>
  )
}

export default Navbar
