import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Row, Col } from 'react-bootstrap'
import { GatsbyImage } from "gatsby-plugin-image"


import * as styles from '../pages/about.module.css'

class Contact extends React.Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const shows = get(this, 'props.data.allContentfulShow.edges')

    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div className={styles.contact}>
          <Helmet title={siteTitle} />
          <div className='bio'>
            <Row>
              <Col lg={3}></Col>
              <Col lg={3}>
                <div style={{}}>
                  <GatsbyImage image={author.node.image.gatsbyImageData} alt="Headshot image of Liam"/>
                </div>
              </Col>
              <Col lg={3}style={{paddingTop: "5%", paddingBottom: "5%"}}>
                <div><p>{renderRichText(author.node.bio)}</p></div>
                <div>Contact me at {author.node.email}</div>
              </Col>
              <Col lg={3}></Col>
            </Row>
          </div>
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
          title
          image{
            gatsbyImageData(
              layout: CONSTRAINED
              width: 200
              cornerRadius: 10
              height: 300
              placeholder: BLURRED
              quality: 100
              resizingBehavior: FILL
            )
            }
    
          email
        }
      }
    }
  }
`
