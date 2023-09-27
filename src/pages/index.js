import React, { useEffect } from "react"
import { graphql } from "gatsby"

import { Link } from "gatsby"
import WebFont from 'webfontloader';

import Blog from "./blog"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import '../styles.css'


export default function Home({ data }) {

  const { title, description } = data.site.siteMetadata
  const { posts } = data.blog


  // let featuredImg = getImage(posts[0].frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)
  let featuredImg = getImage(posts[0].frontmatter.featuredImage?.childImageSharp?.getImageData);
 
  const firstNElements = posts.slice(-1).map(({ id, excerpt }) => {

    console.log(excerpt)

    return (
      <div className="container">
        {/* <GatsbyImage image={featuredImg} />
        <p key={id}>{excerpt}</p> */}
      </div>
    )
  });

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Anek Tamil', 'sans-serif']
      }
    })
  }, [])


  return (
    <div className="site-container">
      <header className="Header">

        <div className="logo-container">
          <h3 className="Logo">Gyasi Linje.</h3>
        </div>

        <nav className="Nav">
          <h1 className="small-logo">Gyasi Linje.</h1>
          <Link to="/blog">Read my blog</Link>
          <Link>Campaigns</Link>
          <Link>Contact</Link>
        </nav>
      </header>
      <div className="main-container">

        <h1 className="small-header">{title}</h1>
        <h2 className="large-subheader">Writings from Gyasi Linje</h2>
        <p>{description}</p>


        {/* <div className="container">
          <img className="main-img" alt="Cute dog" src={data.image.publicURL} />
          <div className="bottom-left">
            <small>{posts[0].frontmatter.date}</small>
            <br/>
            <h2 className="small-margin">{posts[0].excerpt}</h2>
          </div> 
        </div> */}



      </div>


      <br />
      <div className="content-container">
        {firstNElements}

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
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
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