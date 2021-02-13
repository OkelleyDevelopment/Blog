import React from "react";
import { Link } from "gatsby";

import Navbar from "../navbar/navbar";

const Header = () => {

    return (
        <div>
            <div>
                <div>
                    <Link to={"/"}>
                        Okelley<span style={{color: "cyan"}}>Development</span>
                    </Link>
                </div>
                <div>
                <Navbar />

            </div>
            </div>
        </div>
    )
}

export default Header;
