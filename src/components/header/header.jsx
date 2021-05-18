import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../navbar/navbar"
import "./header.css"

const Header = (props) => {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <Navbar />
    </div>
  )
}

export default Header
