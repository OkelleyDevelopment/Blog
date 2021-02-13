import React from "react";

import SEO from "../components/SEO/seo";
import Layout from "../components/layout/layout";

const About = () => (
    <Layout>
        <SEO title="About" />
        <h1 style={{textAlign: "center", textDecoration: "cyan underline"}}>About <span style={{color: "cyan"}}>Me</span>?</h1>
        <h3>Coming Soon. Check back often!</h3>
    </Layout>
)

export default About;
