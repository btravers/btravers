import React from "react"

import "./style.scss"

const FooterLink = ({ value, to }) => (
    <a
        className="link has-text-black"
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "underline" }}
    >
        {value}
    </a>
)

export default FooterLink