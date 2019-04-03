import React from "react"
import { FaLinkedinIn, FaTwitter, FaGithub, FaAngleDown } from "react-icons/fa"

import "./style.scss"
import IconButton from "./icon-button"

const Intro = () => (
    <div className="container has-text-centered">
        <div style={{ marginBottom: '15px' }}>
            <p className="is-size-5 has-text-primary">
                Hi!
            </p>
            <p className="is-size-1 has-text-weight-bold" style={{ marginBottom: "0.6rem" }}>
                I'm Benoit Travers.
            </p>
            <p className="is-size-4 has-text-white-ter is-uppercase intro-position">
                Web developer
            </p>
        </div>
        <a className="button is-primary is-outlined is-large is-uppercase" style={{ padding: "0 1.5rem 0 2.4rem" }}>
            Learn more
            <FaAngleDown className="is-size-2" style={{ paddingLeft: "1.6rem" }} />
        </a>
        <div className="is-size-2" style={{ marginTop: "3rem" }}>
            <IconButton to="https://twitter.com/Benoit_Travers" icon={<FaTwitter />} />
            <IconButton to="https://github.com/btravers" icon={<FaGithub />} />
            <IconButton to="https://www.linkedin.com/in/btraversfr" icon={<FaLinkedinIn />} />
        </div>
    </div>
)

export default Intro