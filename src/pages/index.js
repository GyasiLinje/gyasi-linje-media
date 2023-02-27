import * as React from "react"
import { graphql } from "gatsby"

import { Link } from "gatsby"


import Blog from "./blog"


export default function Home({ data }) {

  const { title, description } = data.site.siteMetadata
  const { posts } = data.blog 

  return (

    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img style={{height: '450px', width: '711px'}} alt="Cute dog" src={data.image.publicURL} />
      <br/>
      <Link to="/blog">Read my blog</Link>
      {
        posts.map(post => (
          <article key={post.id}>
            <Link to={post.fields.slug}>
            <small>
              {post.frontmatter.author}, {post.frontmatter.date}
            </small>
            <p>
              {post.excerpt}
            </p>
            </Link>
          </article>
        ))
      }
    </div>

   
  )
}


export const pageQuery = graphql`
  query MetadataQuery {

    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }

    site {
      siteMetadata {
        title
        description
      }
    }

    image: file(base: { eq: "headshot.jpg" }) {
      publicURL
    }

    
  }
`