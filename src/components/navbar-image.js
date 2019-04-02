import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./style.scss"

const NavBarImage = () => (
    <StaticQuery
        query={graphql`
        query {
            image: file(relativePath: { eq: "logo_transparent.png" }) {
                childImageSharp {
                    fixed(width: 180, height: 60) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
        `}
        render={data => (
            <Img 
                fixed={data.image.childImageSharp.fixed} 
            />
        )}
    />
)

export default NavBarImage