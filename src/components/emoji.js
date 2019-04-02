import React from "react"

const Emoji = ({ value }) => (
    <span 
        role="img" 
        aria-label="emoji"
    >
        {value}
    </span>
)

export default Emoji