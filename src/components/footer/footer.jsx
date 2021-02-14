import React from "react"
import "./footer.css";

const Footer = props => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p className="p-footer">
        {props.name}, Copyright &copy; {currentYear}
      </p>
    </footer>
  )
}

export default Footer
