import { Link } from "gatsby"
import React from "react"

import "./style.scss"

const NavBarLink = ({ value, to }) => (
    <Link className="navbar-item" to={to}>
        {value}
    </Link>
)

export default NavBarLink