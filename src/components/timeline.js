import React from "react"

import "./timeline.scss"


const Timeline = ({ cards }) => (
    <div class="timeline">
        <div class="container">
            {cards}
        </div>
    </div>
)

export default Timeline