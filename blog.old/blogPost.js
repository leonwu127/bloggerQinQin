import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "./layout"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const { previous, next } = data

  return (
    <Layout>
      <article className="w-full mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-primary-800">{post.frontmatter.title}</h1>
          <p className="text-gray-500">{post.frontmatter.date}</p>
          <div className="h-1 w-24 bg-primary-500 mt-6"></div>
        </header>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <section
            className="max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </div>
        
        <footer>
          <div className="border-t border-gray-200 pt-6 mt-8">
            <nav>
              <ul className="flex flex-wrap justify-between">
                <li className="mr-4">
                  {previous && (
                    <Link 
                      to={previous.fields.slug} 
                      rel="prev"
                      className="flex items-center text-primary-600 hover:text-primary-800"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                      {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link 
                      to={next.fields.slug} 
                      rel="next"
                      className="flex items-center text-primary-600 hover:text-primary-800"
                    >
                      {next.frontmatter.title}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const Head = ({ data }) => {
  return <title>{data.markdownRemark.frontmatter.title} | BloggerQinQin</title>
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
` 