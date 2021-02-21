import React from "react"

import SEO from "../components/SEO/seo"
import Layout from "../components/layout/layout"

const Blog = (props) => 
{

  //const {edges} = props.data.allMarkdownRemark;

  return (
    <Layout author="OkelleyDevelopment">
    <SEO title="blog" />
    <h1 style={{ textAlign: "center", textDecoration: "cyan underline" }}>
      Posts
    </h1>
  </Layout>
  )
}

export default Blog
