import React from "react"

import Landing from "../components/landing/landing"
import SEO from "../components/SEO/seo"



const IndexPage = (props) => {
    return (
        <div>
          <SEO title="Home" keywords={["okelleydevelopment"]} />
          <Landing />
        </div>
    )
}

export default IndexPage;


