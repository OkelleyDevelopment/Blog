import React from "react"
import SEO from "../components/SEO/seo"
import Layout from "../components/layout/layout"

import "./index.css"

const Contact = (props) => (
  <Layout>
    <SEO title="contact" />

    <section id="contact">
      <div className="contact-bg">
        <div className="container">
          <h1 style={{ textAlign: "center", color: "orange" }}>Contact</h1>
          <p style={{textAlign:"center"}}>Feel free to shoot me an email or check out my other social links below!</p>
          <div className="social-links">
            <ul>
              <li><span style={{color:"cyan"}}>Email</span>: okelleynp@gmail.com</li>
              <li><span style={{color:"cyan"}}>Linkedin</span>: <a target="_blank"
              rel="nofollow noopener noreferrer" href="https://www.linkedin.com/in/nicholas-o-kelley-2457531a1/">www.linkedin.com/in/nicholas-o-kelley</a></li>
              <li><span style={{color:"cyan"}}>GitHub</span>: <a href="https://github.com/OkelleyDevelopment"> github.com/OkelleyDevelopment</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Contact
