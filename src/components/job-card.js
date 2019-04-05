import React from "react"

import sr from "../services/scrollReveal"

class JobCard extends React.Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef()
    }

    componentDidMount() {
        sr.reveal(
            this.ref.current,
            {
                origin: this.props.isRight ? "right" : "left",
                distance: "300px",
                easing: "ease-in-out",
                duration: 800
            } 
        )
    }

    render() {
        const {job, date, description} = this.props
        return (
            <div className="timeline-item" ref={this.ref}>
                <div className="timeline-img"></div>
                <div className={"timeline-content"}>
                    <h2 className="is-size-4">{job}</h2>
                    <div className="date">{date}</div>
                    <p>{description}</p>
                    <a className="button is-primary is-outlined" href="javascript:void(0)">More</a>
                </div>
            </div>
        )
    }
}

export default JobCard