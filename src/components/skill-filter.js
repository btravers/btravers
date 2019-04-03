import React from "react"

import "./style.scss"

const SkillFilter = ({label, checked, onChange}) => (
    <label className="checkbox is-size-4 has-text-primary" style={{ margin: "1.5rem" }}>
        <input 
            type="checkbox"
            checked={checked}
            onChange={onChange} 
            style={{ margin: "1rem" }}
        />
        {label}
    </label>
)

export default SkillFilter