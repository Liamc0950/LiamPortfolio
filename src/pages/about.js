import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Row, Col } from 'react-bootstrap'
import { GatsbyImage } from "gatsby-plugin-image"
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";


import * as styles from '../pages/about.module.css'

class Contact extends React.Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
    <Layout location={this.props.location}>
      <div className={styles.contact}>
        <Helmet title={siteTitle} />
        
        {/* Center everything horizontally */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'flex-start',
          gap: '30px',
          marginBottom: '20px'
        }}>
          {/* Image */}
          <div>
            <GatsbyImage 
              image={author.node.image.gatsbyImageData} 
              alt="Headshot image of Liam"
            />
          </div>
          
          {/* Bio and contact info */}
          <div style={{ maxWidth: '400px' }}>
            <div style={{ marginBottom: 0 }}>{renderRichText(author.node.bio)}</div> 
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '10px', 
              paddingBottom: '0px' 
            }}>
              <img 
                src="/images/ia_bug.png" 
                alt="IASTSE Bug Logo"
                style={{ width: '80px', height: 'auto' }}
              />
              <span>Proud member IATSE ACT</span>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <a href={author.node.facebook} target="_blank">
                <FaFacebook size="1.5em" style={{ margin: '5px' }}/>
              </a>
              <a href={author.node.instagram} target="_blank">
                <FaInstagram size="1.5em" style={{ margin: '5px' }}/>
              </a>
              <a href={author.node.github} target="_blank">
                <FaGithub size="1.5em" style={{ margin: '5px' }}/>
              </a>
            </div>
            
            <div style={{ paddingTop: '15px', textAlign: 'center' }}>
              Contact me at {author.node.email}
            </div>
          </div>
        </div>

        {/* Projects section */}
        <div className='projects'>
          <h4><b>UPCOMING PROJECTS</b></h4>
          <hr/>
          {author.node.upcomingProjects.map((project, index) => (
            <div key={index}>
              <h5>{project.title}</h5>
              <h6>{project.venue} / {project.producer}</h6>
              <i><p>{project.role}</p></i>
            </div>
          ))}
          
          <h4><b>RECENT PROJECTS</b></h4>
          <hr/>
          {author.node.recentProjects.map((project, index) => (
            <div key={index}>
              <h5>{project.title}</h5>
              <h6>{project.venue} / {project.producer}</h6>
              <i><p>{project.role}</p></i>
            </div>
          ))}
        </div>
      </div>
    </Layout> 
  )}
}

export default Contact

export const pageQuery = graphql`
  query Contact {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          bio {
            raw
          }
          facebook
          github
          instagram
          title
          image{
            gatsbyImageData(
              layout: CONSTRAINED
              width: 200
              cornerRadius: 10
              height: 300
              placeholder: BLURRED
              quality: 50
              resizingBehavior: FILL
            )
          }
          email
          recentProjects {
            ... on ContentfulProjectShort {
              id
              title
              venue
              producer
              role
            }
          }
            upcomingProjects {
            title
            venue
            producer
            role
          }
          }
      }
    }
  }
`
