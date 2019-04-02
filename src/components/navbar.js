import React from "react"

import "./style.scss"
import NavBarLink from "./navbar-link"
import NavBarImage from "./navbar-image"

const NavBar = () => (
    <nav 
        className="navbar" 
        role="navigation" 
        aria-label="main navigation"
    >
        <div className="navbar-brand">
            <NavBarImage />
            <a 
                role="button" 
                className="navbar-burger burger" 
                aria-label="menu" 
                aria-expanded="false" 
                data-target="navbar"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbar" className="navbar-menu">
            <div className="navbar-end">
                <NavBarLink 
                    value="Home"
                    to="/"
                />
                <NavBarLink 
                    value="Blog"
                    to="/blog"
                />
            </div>
        </div>
    </nav>
)

export default NavBar