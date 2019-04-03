import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from "../components/landing"
import About from "../components/about"
import Skills from "../components/skills"
import Experiences from "../components/experiences";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <About />
    <Skills />
    <Experiences />
  </Layout>
)

export default IndexPage
