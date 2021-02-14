import React from "react"

import SEO from "../components/SEO/seo"
import Layout from "../components/layout/layout"

const Blog = () => (
  <Layout author="OkelleyDevelopment">
    <SEO title="blog" />
    <h1 style={{ textAlign: "center", textDecoration: "cyan underline" }}>
      Posts
    </h1>
    <h3>Coming Soon. Check back often!</h3>
  </Layout>
)

export default Blog
