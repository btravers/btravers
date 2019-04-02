import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa"

import "./style.scss"
import NavBar from "./navbar"

const Social = ({ children, to }) => (
    <a 
        className="link"
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '5px' }}
    >
        {children}
    </a>
)

const Landing = () => (
    <StaticQuery 
        query={graphql`
        query {
            image: file(relativePath: { eq: "landing.jpg" }) {
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
        `}
        render={data => (
            <section
                className="hero is-primary is-fullheight"
            >
                <Img 
                    fluid={data.image.childImageSharp.fluid} 
                    style={{ 
                        position: 'absolute', 
                        left: 0, 
                        top: 0, 
                        width: '100%',
                        height: '100%'
                    }}
                />
                <div 
                    style={{ 
                        position: 'absolute', 
                        left: 0, 
                        top: 0, 
                        width: '100%',
                        height: '100%',
                        background: '#111111', 
                        opacity: .85 
                    }}
                />
                <NavBar />
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div style={{ marginBottom: '15px' }}>
                            <p className="is-size-5 has-text-primary">Hi</p>
                            <p className="is-size-1 has-text-weight-semibold">I'm Benoit Travers</p>
                            <p className="is-size-4 has-text-white-ter is-uppercase">Web developer</p>
                        </div>
                        <div className="is-size-2">
                            <Social to="https://twitter.com/Benoit_Travers">
                                <FaTwitter />
                            </Social>
                            <Social to="https://github.com/btravers">
                                <FaGithub />
                            </Social>
                            <Social to="https://www.linkedin.com/in/btraversfr">
                                <FaLinkedinIn />
                            </Social>
                        </div>
                    </div>
                </div>
            </section>
        )}
    />
)

export default Landing