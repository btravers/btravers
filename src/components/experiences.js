import React from "react"
import map from "lodash/map"

import Section from "./section"
import Timeline from "./timeline"
import JobCard from "./job-card"

const experiences = [
    {
        job: "Backend developer at Ouest-France",
        description: "Todo",
        date: "01/2018 - Today"
    },
    {
        job: "Web developer at bioMérieux",
        description: "Todo",
        date: "07/2017 - 12/2017"
    },
    {
        job: "Big Data developer at Pages Jaunes",
        description: "Todo",
        date: "01/2017 - 07/2017"
    },
    {
        job: "Full Stack developer at Zenika",
        description: "Todo",
        date: "04/2016 - 01/2017"
    },
    {
        job: "Web developer at Sopra Steria",
        description: "Todo",
        date: "09/2015 - 03/2016"
    }
]

const Experiences = () => (
    <Section 
        title="Experiences"
        content={
            <Timeline 
                cards={
                    map(experiences, ({ job, description, date }, index) => <JobCard 
                        key={index}
                        job={job}
                        date={date}
                        description={description}
                        isRight={index % 2 === 1}
                    />) 
                } 
            />
        }
    />
)

export default Experiences