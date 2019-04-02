import React from "react"
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md"

import "./style.scss"

const Star = ({ value }) => {
    if (value >= 1) return <MdStar />
    if (value <= 0) return <MdStarBorder />
    return <MdStarHalf />
}

const Skill = ({ name, mark }) => (
    <div>
        {name}
        <span>
            {
                [0, 1, 2, 3, 4].map(index => (<Star value={mark - index} />))
            }
        </span>
    </div>
)

export default Skill