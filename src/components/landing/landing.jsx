import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import "./landing.css"

import BackgroundImage from 'gatsby-background-image'

const LandingPage = props => {
  
  return (
      <div>
        <h1
          style={{
            paddingTop: "190px",
            textAlign: "center",
            marginTop: "100px",
            color: "#ddd",
            lineHeight: "100px",
            fontSize: "80px",
            fontFamily: "sans-serif",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Nicholas O'Kelley
        </h1>
        <h3
          style={{
            textAlign: "center",
            color: "#009494",
            lineHeight: "90px",
            marginTop: "0px",
            marginBottom: "20px",
            textTransform: "uppercase",
            textDecoration: "underline",
          }}
        >
          Computer Scientist<span style={{color:"orange"}}> & </span>Software Developer{" "}
        </h3>
        <div className="button-box">
          <Link to="/about" 
                style={{border: "1px #00e5e5 solid",
                        textDecoration: "none",
                        color: "White",
                        fontSize: "20px",
                        padding: "10px 40px",
              }}
              >
                Learn More
              </Link>
        </div>
      </div>
  )
}

export default LandingPage
