import React from "react"
import { StaticQuery, graphql } from 'gatsby'

import "./style.scss"
import FooterLink from "./footer-link"
import Emoji from "./emoji";

const Footer = () => (
    <StaticQuery
        query={graphql`
			query SocialQuery {
				site {
					siteMetadata {
						github
						gatsby
                        bulma
                        netlify
					}
				}
			}
		`}
        render={data => (
            <footer
                className="footer"
            >
                <div
                    className="content has-text-centered"
                >
                    <p>
                        Handcrafted with <Emoji value="❤️" /> by me
                    </p>
                    <p>
                        Using <FooterLink value="Gatsby" to={data.site.siteMetadata.gatsby} /> + <FooterLink value="Bulma" to={data.site.siteMetadata.bulma} /> + <FooterLink value="Netlify" to={data.site.siteMetadata.netlify} />
                    </p>
                    <p>
                        Source code on <FooterLink value="Github" to={data.site.siteMetadata.github} />
                    </p>
                </div>
            </footer>
        )}
    />
)

export default Footer