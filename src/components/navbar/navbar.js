import React from "react";
import { Link } from "gatsby";
import './navbar.css';

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

const Navbar = (props) => {
    const navMenuItem = ["Blog", "Research", "About", "Contact"];

    const navListing = navMenuItem.map((item) => {
        let pagelink = "";
        if(item === "Home"){
            pagelink = "/";
        } else {
            pagelink = "/" + item.toLowerCase() + "/";
        }

        return (
            <li key={pagelink}>
                <Link to={pagelink}
                className="page-link"
                style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                }}>
                    {item}
                </Link>
            </li>
        )
    });


    return (
        <nav className="navbar">
            <div className="navbar-item" style={{align: `center`}}>
                <ul>
                    {navListing}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
