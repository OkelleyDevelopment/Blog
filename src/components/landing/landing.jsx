import React from "react"
import { Link } from "gatsby"
import "./landing.css"

const LandingPage = props => {
  
  return (
      <div id="outter-landing-div">
        <div id="landing-div">
        <h1 id="landing-h1"> Nicholas P. O'Kelley</h1>
        <h3 id="landing-h3" style={{  textDecoration: "none", color: "#009494"}}>
         DevOps
         <span style={{color:"#d05700"}}> || </span> 
         Tokenomics 
         <span style={{color:"#d05700"}}> || </span> 
         Engineering        
        </h3>

        <div id="button-box">
          <Link to="/about" 
                style={{border: "1px #00e5e5 solid",
                        textDecoration: "none",
                        color: "White",
                        fontSize: "20px",
                        padding: "10px 40px",
              }}
              >
                Learn More
              </Link>
          </div>
        </div>
      </div>
  )
}

export default LandingPage;
