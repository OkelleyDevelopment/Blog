import React from "react"
import SEO from "../components/SEO/seo"
import Layout from "../components/layout/layout"


import "./index.css"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1 style={{ textAlign: "center" }}>About Me</h1>
    <div className="container">
      <div className="post">
        <div className="content">
          <p>
            Hello! My name is Nicholas and I study Computer Science and
            Mathematics at Western Carolina University. I'm an aspiring
            developer with a strong passion to create fun and useful
            applications that help expand and refine my skillset. This website
            was created so that I could begin publicly documenting this process.
          </p>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="post">
        <div className="content">
          <h2>Two Player Games</h2>
          <p>Research exploring Evolutionary Game Theory on Two Player Games!</p>
        </div>
      </div>
    </div>

  </Layout>
)

export default About
