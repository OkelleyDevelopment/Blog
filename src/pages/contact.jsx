import React from "react"
import SEO from "../components/SEO/seo"
import Layout from "../components/layout/layout"

const Contact = props => (
  <Layout>
    <SEO title="contact" />

    <section id="contact">
      <div className="contact-bg">
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Contact</h1>

          <div className="social-links">
            <ul>
              <li>Email: okelleynp@gmail.com</li>
              <li>LinkedIn: www.linkedin.com/in/nicholas-o-kelley</li>
              <li>Github: github.com/OkelleyDevelopment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Contact
