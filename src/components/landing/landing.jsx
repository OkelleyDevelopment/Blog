import React from "react"
import { Link } from "gatsby"
import SEO from "../SEO/seo"
import "./landing.css"

const LandingPage = props => {
  return (
    <div>
      <div className="background">
        <SEO title="Home" keywords={["okelleydevelopment"]} />
        <h1
          style={{
            textAlign: "center",
            textDecoration: "none",
            marginTop: "180px",
          }}
        >
          Nicholas O'Kelley
        </h1>
        <h3
          style={{
            textAlign: "center",
            marginTop: "25px",
            textDecoration: "underline",
            color: "cyan",
          }}
        >
          Computer Scientist || Software Developer{" "}
        </h3>
        <div className="button-box">
          <Link to="/about">Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
