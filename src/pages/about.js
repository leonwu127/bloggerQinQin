import * as React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>
        Hello! Welcome to my blog. I'm QinQin, a passionate writer and creator.
        This blog is where I share my thoughts, experiences, and insights on
        topics that interest me.
      </p>
      <p>
        I created this blog using Gatsby, a modern web framework for building
        lightning-fast websites and apps using React.
      </p>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About Me | BloggerQinQin</title> 