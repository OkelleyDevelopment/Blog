import React from "react"
import { Link } from "gatsby"
import "./navbar.css"

const Navbar = props => {
  const navMenuItem = ["About", "Blog", "Contact"]

  const navListing = navMenuItem.map(item => {
    let pagelink = ""
    if (item === "Home") {
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
            textDecoration: `none`,
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
      <div>
        <Link to="/">
        <h2 style={{ fontSize: "30px" }}>
            OKelley<span stlye={{textDecoration: "none", color: "cyan" }}>Development</span>
          </h2>
        </Link>
      </div>
      <div className="navbar-item" style={{ align: `right` }}>
        <ul>{navListing}</ul>
      </div>
    </nav>
  )
}

export default Navbar
