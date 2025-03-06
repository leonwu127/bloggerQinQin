import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark?.nodes || []

  return (
    <Layout>
      <h1>BloggerQinQin</h1>
      <p>Welcome to my personal blog where I share my thoughts and experiences.</p>
      
      <h2>Latest Posts</h2>
      {posts.length > 0 ? (
        <ol style={{ listStyle: "none", padding: 0 }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            
            return (
              <li key={post.fields.slug}>
                <article>
                  <h3>
                    <Link to={post.fields.slug}>{title}</Link>
                  </h3>
                  <small>{post.frontmatter.date}</small>
                  <p>{post.frontmatter.description || post.excerpt}</p>
                </article>
              </li>
            )
          })}
        </ol>
      ) : (
        <p>No blog posts found. Add markdown posts to "content/blog".</p>
      )}
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