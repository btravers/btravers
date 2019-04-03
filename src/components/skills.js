import React, { useState } from "react"
import orderBy from "lodash/orderBy"
import map from "lodash/map"
import filter from "lodash/filter"
import chunk from "lodash/chunk"

import "./style.scss"
import Skill from "./skill"
import SkillFilter from "./skill-filter"
import Section from "./section"

const skills = [
    {
        name: "React",
        mark: 4,
        domain: "front"
    },
    {
        name: "JavaScript",
        mark: 4,
        domain: "front"
    },
    {
        name: "Kotlin",
        mark: 4,
        domain: "back"
    },
    {
        name: "Java",
        mark: 4,
        domain: "back"
    },
    {
        name: "Spring",
        mark: 3,
        domain: "back"
    },
    {
        name: "Spring WebFlux",
        mark: 4,
        domain: "back"
    },
    {
        name: "Node.js",
        mark: 3,
        domain: "back"
    },
    {
        name: "Scala",
        mark: 2,
        domain: "back"
    },
    {
        name: "Akka",
        mark: 2,
        domain: "back"
    },
    {
        name: "Rust",
        mark: 1,
        domain: "back"
    },
    {
        name: "Git",
        mark: 4,
        domain: "tool"
    },
    {
        name: "Kafka",
        mark: 2,
        domain: "data"
    },
    {
        name: "Hadoop",
        mark: 2,
        domain: "data"
    },
    {
        name: "ElasticSearch",
        mark: 3,
        domain: "data"
    },
    {
        name: "PostgreSQL",
        mark: 3,
        domain: "data"
    },
    {
        name: "Spark",
        mark: 2,
        domain: "data"
    },
    {
        name: "Docker",
        mark: 3,
        domain: "devops"
    },
    {
        name: "Kubernetes",
        mark: 2,
        domain: "devops"
    }
]

const Skills = () => {
    const [filters, setFilters] = useState({
        data: true,
        devops: true,
        back: true,
        front: true,
        tool: true
    })

    const filteredElements = filter(skills, ({ domain }) => filters[domain])
    const skillElements = map(
        chunk(
            map(
                orderBy(
                    filteredElements, 
                    ['mark', 'name'], 
                    ['desc', 'asc']
                ), 
                ({name, mark}) => <Skill name={name} mark={mark} key={name} />
            ), 
            filteredElements.length % 3 === 0 ? filteredElements.length / 3 : filteredElements.length / 3 + 1
        ), 
        (c, index) => <div className="column" key={index}>{c}</div>
    )
    
    const generateFilter = (label, filter) => (
        <SkillFilter 
            label={label}
            checked={filters[filter]}
            onChange={() => setFilters({ ...filters, [filter]: !filters[filter] })}
        />
    )

    return (
        <Section 
            className="has-background-light"
            title="Skills"
            content={
                <div>
                    <div className="container is-flex" style={{ justifyContent: "space-evenly" }}>
                        {generateFilter("Backend development", "back")}
                        {generateFilter("Frontend development", "front")}
                        {generateFilter("Devops", "devops")}
                        {generateFilter("Data", "data")}
                        {generateFilter("Tooling", "tool")}
                    </div>
                    <div className="columns is-desktop is-8">
                        {skillElements}
                    </div>
                </div>
            }
        />
    )
}

export default Skills