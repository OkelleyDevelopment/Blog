import React from "react"
import Layout from "../components/layout/layout"
import { Link, graphql } from "gatsby";
//import "./index.css"
import "../templates/blog-post.css"

const Blog = ({ data }) => {
  const {edges: posts} = data.allMarkdownRemark;

  return (
    <Layout>

      <h1 className="blog-posts">Notes</h1>

          <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1>
                <Link to={post.frontmatter.path} style={{color: "cyan"}}>{post.frontmatter.title}</Link>
              </h1>
              <h2>{post.frontmatter.date}</h2>
              <p>{post.frontmatter.excerpt}</p>
            </div>
          )
        })
        }
    </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            excerpt
          }
        }
      }
    }
  }
`
