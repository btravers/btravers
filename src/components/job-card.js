import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./style.scss"
import "./job-card.scss"

const Logo = () => (
    <figure className="image is-36x36 timeline-logo">
        <StaticQuery
            query={graphql`
            query {
                image: file(relativePath: { eq: "znk.png" }) {
                    childImageSharp {
                        fixed(width: 36, height: 36) {
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
    </figure>
)

class JobCard extends React.Component {
    constructor(props) {
        super(props)
        this.contentRef = React.createRef()
        this.imgRef = React.createRef()
    }

    componentDidMount() {
        import("../services/scrollReveal").then(sr => {
            sr.default.reveal(
                this.contentRef.current,
                {
                    origin: this.props.isRight ? "right" : "left",
                    distance: "300px",
                    easing: "ease-in-out",
                    duration: 800
                } 
            )
            sr.default.reveal(
                this.imgRef.current,
                {
                    duration: 800
                } 
            )
        })
    }

    render() {
        const {job, date, description, skills} = this.props
        return (
            <div className="timeline-item">
                <div className="timeline-img" ref={this.imgRef}></div>
                <div className="timeline-content" ref={this.contentRef}>
                    <h2 className="is-size-4">{job}</h2>
                    <div className="date">{date}</div>
                    <Logo />
                    <p>{description}</p>
                    <p style={{ padding: "15px 0" }}>
                        <span className="has-text-weight-bold" style={{ paddingRight: "5px" }}>
                            Skills:
                        </span> 
                        {skills.join(", ")}
                    </p>
                </div>
            </div>
        )
    }
}

export default JobCard