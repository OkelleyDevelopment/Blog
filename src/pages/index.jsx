import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Landing from "../components/landing/landing"
import SEO from "../components/SEO/seo"
import BackgroundImage from 'gatsby-background-image'  
import "../components/landing/landing.css"

const IndexPage = (props) => {

    const data  = useStaticQuery(graphql`
    query {
      darkTrail: file(relativePath: { eq: "dark_trail.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2156) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `
    )
    
    
      const image = data.darkTrail.childImageSharp.fluid
    return (
        <div>
             <SEO title="Home" keywords={["okelleydevelopment"]} />
             <Landing />
            </div>
    )
}

export default IndexPage;


