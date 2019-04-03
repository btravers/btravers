import React from "react"
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md"
import range from "lodash/range"
import map from "lodash/map"

import "./style.scss"

const Star = ({ value }) => {
    if (value >= 1) return <MdStar />
    if (value <= 0) return <MdStarBorder />
    return <MdStarHalf />
}

const Skill = ({ name, mark }) => (
    <div className="level is-size-4" style={{ margin: "1rem 3.5rem" }}>
        <span className="level-left">
            {name}
        </span>
        <span className="level-right">
            {
                map(range(5), index => (<Star value={mark - index} key={index} />))
            }
        </span>
    </div>
)

export default Skill