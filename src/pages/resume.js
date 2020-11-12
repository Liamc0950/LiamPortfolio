import React, { useState } from 'react';
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { UncontrolledCarousel } from 'reactstrap';
import Navigation from '../components/navigation'
import { Document, Page } from 'react-pdf';

import styles from '../pages/resume.module.css'

export default class Resume extends React.Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const shows = get(this, 'props.data.allContentfulShow.edges')

    //pdf setup
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);
   
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  

    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Navigation fixed="top" data={author.node} shows={shows}/>
        <div className={styles.resume}>
          <Helmet title={siteTitle} />
          <Document
            file={author.node.resume}
            onLoadSuccess={onDocumentLoadSuccess}
          >
          </Document>
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
          resume {
            file {
              url
            }
          }
          name
          title
        }
      }
    }
    allContentfulShow(sort: { fields: [createdAt], order: DESC }) {
      edges{
        node {
          title
          showCredits
          createdAt
          images {
            fluid{
              src
            }
          }
        }
      }
    }

  }
`
