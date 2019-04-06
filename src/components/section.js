import React from "react"

import "./style.scss"

const Section = ({ className, title, content }) => (
    <section className={className}>
        <div className="container has-text-centered">
            <h2 className="is-size-2" style={{ margin: "1rem" }}>
                {title}
            </h2>
            {content}
        </div>
    </section>
)

export default Section