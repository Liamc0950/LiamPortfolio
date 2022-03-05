import React, { useState } from 'react';
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import { Link } from 'gatsby';

import { GatsbyImage } from "gatsby-plugin-image"
import { Row, Col } from 'react-bootstrap'


import * as styles from '../pages/resume.module.css'

export default class Resume extends React.Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    var style = {
      marginLeft: '25%',
      marginRight: '25%',
      width: '50%',
    };


    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div className={styles.resume}>
          <Helmet title={siteTitle} />
          {/* PDF EMBED - Replaced with image preview */}
          {/*<object data={author.node.resume.file.url} type="application/pdf" width="700px" height="700px">
             <embed src={author.node.resume.file.url}>
             </embed>
          </object> */}
          {/* <img src={author.node.resumeImage.file.url} style={style}></img> */}
          <GatsbyImage image={author.node.resumeImage.gatsbyImageData} className='mt-5'></GatsbyImage>
          <div className={styles.preview}>
            <div style= {style}></div>
            <div className={styles.link}><p>Download resume</p><Link to={author.node.resume.file.url}> here.</Link></div>
          </div>
        </div>
      </Layout>
    )
  }
}


export const pageQuery = graphql`
  query Resume {
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
          resumeImage {
            gatsbyImageData(
              layout: CONSTRAINED, 
              placeholder: BLURRED,
              quality: 100,
              resizingBehavior: FILL,
            )
          }
          resume{
            file{
              url
            }
          }
        }
      }
    }
  }
`
