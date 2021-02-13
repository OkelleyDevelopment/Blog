import React from "react";

import SEO from "../components/SEO/seo";
import Layout from "../components/layout/layout";

const About = () => (
    <Layout>
        <SEO title="About" />
        <h1 style={{textAlign: "center", textDecoration: "cyan underline"}}>Who am <span style={{color: "cyan"}}>I</span>?</h1>

    </Layout>
)

export default About;
