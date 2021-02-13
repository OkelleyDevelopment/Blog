import React from "react"
import { Link } from "gatsby"
import "./navbar.css"

const Navbar = props => {
  const navMenuItem = ["Blog", "Research", "About", "Contact"]

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
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href="https://github.com/OkelleyDevelopment"
        >
          <h2 style={{ fontSize: "30px" }}>
            OKelley<span stlye={{ color: "light cyan" }}>Development</span>
          </h2>
        </a>
      </div>
      <div className="navbar-item" style={{ align: `right` }}>
        <ul>{navListing}</ul>
      </div>
    </nav>
  )
}

export default Navbar
