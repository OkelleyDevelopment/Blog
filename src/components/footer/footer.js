import React from "react";
import { Link } from "gatsby";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
        <p>Copyright &copy; {currentYear}
        </p>
    </footer>
    )
}

export default Footer;
