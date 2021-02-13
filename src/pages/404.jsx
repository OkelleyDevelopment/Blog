import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/SEO/seo";

const PageNotFound = () => (
    <Layout>
        <SEO title="404: Page not found" />
        <h1 style={{marginTop: "120px"}}>Page Not Found</h1>
        <p style={{marginTop: "80px"}}>You just hit a route that doesn&#39;t exist!</p>
    </Layout>
)

export default PageNotFound;
