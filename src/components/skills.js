import React from "react"
import orderBy from "lodash/orderBy"
import map from "lodash/map"
import chunk from "lodash/chunk"

import Skill from "./skill"

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
        name: "Node.js",
        mark: 3,
        domain: "back"
    },
    {
        name: "Scala",
        mark: 3,
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

const Skills = () => (
    <section className="has-background-light">
        <div className="container has-text-centered">
            <h2 className="is-size-2">Skills</h2>
            <div class="columns is-desktop is-8">
                {
                    map(
                        chunk(
                            map(
                                orderBy(
                                    skills, 
                                    ['mark', 'name'], 
                                    ['desc', 'asc']
                                ), 
                                ({name, mark}) => <Skill name={name} mark={mark} />
                            ), 
                            skills.length / 3
                        ), 
                        c => <div className="column">{c}</div>
                    )
                }
            </div>
        </div>
    </section>
)

export default Skills