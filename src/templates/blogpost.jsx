import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"

function BlogPost(props) {
  const { title, image, tags } = props.data.markdownRemark.frontmatter
  const { prev, next } = props.pageContext
  const { id } = props.data.markdownRemark

  return (
    <Layout>
      <div>
        <h1 style={{ backgroundColor: "#1e2127", textAlign: "center" }}>
          {title}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          className={style.markdownBody}
        />
      </div>
    </Layout>
  )
}

export default BlogPost
