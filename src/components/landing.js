import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image"

import "./style.scss"
import NavBar from "./navbar"
import Intro from "./intro"

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
                        opacity: .8 
                    }}
                />
                <NavBar />
                <div className="hero-body">
                    <Intro />
                </div>
            </section>
        )}
    />
)

export default Landing