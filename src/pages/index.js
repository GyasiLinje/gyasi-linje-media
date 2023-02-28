import React, { useEffect } from "react"
import { graphql } from "gatsby"

import { Link } from "gatsby"
import WebFont from 'webfontloader';

import Blog from "./blog"
import '../styles.css'


export default function Home({ data }) {

  const { title, description } = data.site.siteMetadata
  const { posts } = data.blog

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Anek Tamil', 'sans-serif']
      }
    })
  }, [])

  return (
    <div>
      <header className="Header">

        <h1 className="Logo">Gyasi Calhoun</h1>

        <nav className="Nav">
          <h1 className="small-logo">Gyasi Calhoun</h1>
          <Link to="/blog">Read my blog</Link>
          <Link>Campaigns</Link>
          <Link>Contact</Link>
        </nav>
      </header>

      <h1 className="font-loader">{title}</h1>
      <p>{description}</p>
      <img style={{ height: '450px', width: '711px' }} alt="Cute dog" src={data.image.publicURL} />
      <br />

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