import React from "react";

const Footer = (props) => {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p style={{color: "cyan"}}>{props.name}, Copyright &copy; {currentYear}</p>
        </footer>
    )
}

export default Footer;
