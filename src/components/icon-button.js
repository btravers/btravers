import React from "react"

const IconButton = ({ icon, to }) => (
    <a 
        className="link social"
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '15px' }}
    >
        {icon}
    </a>
)

export default IconButton