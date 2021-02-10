import React from "react"
import { Link } from "gatsby";
import SEO from "../components/SEO/seo";

import "./index.css"


const IndexPage = () => (
    <div className="landing">
    <SEO title="Home" keywords={["okelleydevelopment"]} />
    <h1 style={{ textAlign: "center", marginTop: "180px"}}>Nicholas O'Kelley</h1>
    <h3 style={{ textAlign: "center", marginTop: "30px"}}>Computer Scientist || Software Developer </h3>
    <div>
        <Link to="/portfolio">Learn More</Link>
    </div>
  </div>
)

export default IndexPage;
