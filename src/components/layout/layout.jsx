import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import Footer from "../footer/footer"

const Layout = ({ author, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <Footer name={data.site.siteMetadata.author} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
