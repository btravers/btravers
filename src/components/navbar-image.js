import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./style.scss"

const NavBarImage = () => (
    <StaticQuery
        query={graphql`
        query {
            image: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fixed(width: 130, height: 55) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
        `}
        render={data => (
            <Img 
                fixed={data.image.childImageSharp.fixed} 
                style={{ margin: "10px" }}
            />
        )}
    />
)

export default NavBarImage