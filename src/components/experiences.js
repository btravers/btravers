import React from "react"
import map from "lodash/map"

import Section from "./section"
import Timeline from "./timeline"
import JobCard from "./job-card"

const experiences = [
    {
        job: "Backend developer at Ouest-France",
        description: "Todo",
        skills: [
            "Kotlin", 
            "Java", 
            "Spring Boot", 
            "Spring WebFlux",
            "Elasticsearch", 
            "Kafka", 
            "Kafka streams", 
            "PostgreSQL", 
            "Docker",
            "Kubernetes", 
            "RabbitMQ",
            "Git",
            "GitLab CI/CD"
        ],
        date: "01/2018 - Today"
    },
    {
        job: "Web developer at bioMérieux",
        description: "Todo",
        skills: [
            "JavaScript", 
            "React", 
            "Redux",
            "Storybook",
            "Jest",
            "Git"
        ],
        date: "07/2017 - 12/2017"
    },
    {
        job: "Big Data developer at Pages Jaunes",
        description: "Todo",
        skills: [
            "Scala", 
            "Spark", 
            "Hadoop",
            "Elasticsearch",
            "Javascript",
            "React",
            "Redux"
        ],
        date: "01/2017 - 07/2017"
    },
    {
        job: "Full Stack developer at Zenika",
        description: "Todo",
        skills: [
            "Java", 
            "Spring Boot", 
            "MongoDB",
            "Apache Camel",
            "Javascript",
            "React",
            "Redux",
            "Node.js",
            "Docker",
            "Scrum"
        ],
        date: "04/2016 - 01/2017"
    },
    {
        job: "Web developer at Sopra Steria",
        description: "Todo",
        skills: [
            "Java", 
            "Spring", 
            "Hibernate",
            "Oracle Database",
            "Flex",
            "Scrum"
        ],
        date: "09/2015 - 03/2016"
    }
]

const Experiences = () => (
    <Section 
        title="Experiences"
        content={
            <Timeline 
                cards={
                    map(experiences, ({ job, description, date, skills }, index) => <JobCard 
                        key={index}
                        job={job}
                        date={date}
                        description={description}
                        skills={skills}
                        isRight={index % 2 === 1}
                    />) 
                } 
            />
        }
    />
)

export default Experiences