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
            <Row>
              <Col lg={3}></Col>
              <Col lg={3}>
                <div style={{}}>
                  <GatsbyImage image={author.node.image.gatsbyImageData} alt="Headshot image of Liam"/>
                </div>
              </Col>
              <Col lg={3}style={{paddingTop: "5%", paddingBottom: "5%"}}>
                <div><p>{renderRichText(author.node.bio)}</p></div>
                <div>
                  <a href={author.node.facebook} target="_blank">
                    <FaFacebook size="1.5em" style={{ margin: '5px' }}/>{}
                  </a>
                  <a href={author.node.instagram} target="_blank">
                    <FaInstagram size="1.5em" style={{ margin: '5px' }}/>{}
                  </a>
                  <a href={author.node.github} target="_blank">
                    <FaGithub size="1.5em" style={{ margin: '5px' }}/>{}
                  </a>
                </div>
                <div style={{ paddingTop: '15px' }}>Contact me at {author.node.email}</div>
              </Col>
              <Col lg={3}></Col>
            </Row>
            <Row>
              <div className='projects'>
                <h4><b>UPCOMING PROJECTS</b></h4>
                <hr></hr>
                {author.node.upcomingProjects.map(project=>(
                  <div>
                    <h5>{project.title}</h5>
                    <h6>{project.venue} / {project.producer}</h6>
                    <i><p>{project.role}</p></i>
                  </div>
                ))}
                <h4><b>RECENT PROJECTS</b></h4>
                <hr></hr>
                {author.node.recentProjects.map(project=>(
                  <div>
                    <h5>{project.title}</h5>
                    <h6>{project.venue} / {project.producer}</h6>
                    <i><p>{project.role}</p></i>
                  </div>
                ))}
              </div>
            </Row>
        </div>
      </Layout>
    )
  }
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
