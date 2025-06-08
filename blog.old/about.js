import * as React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <div className="w-full">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary-800">About Me</h1>
          <div className="h-1 w-32 bg-primary-500 mb-8"></div>
        </section>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Hello! Welcome to my blog. I'm QinQin, a passionate writer and creator.
              This blog is where I share my thoughts, experiences, and insights on
              topics that interest me.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              I created this blog using Gatsby, a modern web framework for building
              lightning-fast websites and apps using React.
            </p>
            
            <div className="mt-8 mb-4 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">My Interests</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Writing and sharing stories</li>
                <li>Web development and programming</li>
                <li>Photography and visual arts</li>
                <li>Reading books across various genres</li>
              </ul>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-4">Get in Touch</h2>
              <p className="text-gray-700">
                Feel free to connect with me on social media or send me an email if you'd like
                to chat about potential collaborations or just to say hello!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <title>About Me | BloggerQinQin</title> 