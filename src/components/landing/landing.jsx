import React from "react"
import { Link } from "gatsby"
import SEO from "../SEO/seo"

const LandingPage = ({ children }) => {
  return (
    <div>
      <SEO title="Home" keywords={["okelleydevelopment"]} />
      <h1 style={{ textAlign: "center", marginTop: "180px" }}>
        Nicholas O'Kelley
      </h1>
      <h3 style={{ textAlign: "center", marginTop: "30px" }}>
        Computer Scientist || Software Developer{" "}
      </h3>
      <div>
        <Link to="/portfolio">Learn More</Link>
      </div>
    </div>
  )
}

export default LandingPage
