import React from "react"
import SEO from "../components/SEO/seo"
import Layout from "../components/layout/layout"


import "./index.css"

const About = (props) => (
  <Layout>
    <SEO title="Portfolio" />
    <h1 style={{ textAlign: "center", color: "#d05700" }}>Portfolio</h1>
    <div className="container">
      <div className="post">
        <div className="content">
          <h2>Overview</h2>
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
          <p>My current team research project for the 2020-2021 school year, exploring Evolutionary Game Theory on Two Player Games!</p>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="post">
        <div className="content">
          <h2>Competitive Graph Coloring Game</h2>
          <p>Research completed during the 2019-2020 school year, exploring differing mediums for teaching/ demonstrating Compettive Graph Coloring and Graph theory with software.</p>
        </div>
      </div>
    </div>

  </Layout>
)

export default About
