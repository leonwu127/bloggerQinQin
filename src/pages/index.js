import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark?.nodes || []

  return (
    <Layout>
      <div className="w-full">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary-800">BloggerQinQin</h1>
          <p className="text-xl text-gray-600 mb-6">
            Welcome to my personal blog where I share my thoughts and experiences.
          </p>
          <div className="h-1 w-32 bg-primary-500 mb-10"></div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-6 text-primary-700">Latest Posts</h2>
          
          {posts.length > 0 ? (
            <div className="space-y-10">
              {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug
                
                return (
                  <article 
                    key={post.fields.slug}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      <Link 
                        to={post.fields.slug}
                        className="text-primary-700 hover:text-primary-500"
                      >
                        {title}
                      </Link>
                    </h3>
                    <div className="text-sm text-gray-500 mb-3">
                      {post.frontmatter.date}
                    </div>
                    <p className="text-gray-700">
                      {post.frontmatter.description || post.excerpt}
                    </p>
                    <div className="mt-4">
                      <Link 
                        to={post.fields.slug}
                        className="inline-flex items-center text-primary-600 hover:text-primary-800"
                      >
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-md">
              <p className="text-amber-700">
                No blog posts found. Add markdown posts to "content/blog".
              </p>
            </div>
          )}
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>Home | BloggerQinQin</title> 