import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import '../components/base.css';

import { GatsbyImage } from "gatsby-plugin-image"
import { Row, Col } from 'react-bootstrap'

import * as styles from './gallery.module.css'
import NebulousGrid from '../components/nebulous-grid'



class RootIndex extends React.Component {
  
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const shows = get(this, 'props.data.allContentfulProgrammingProject.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <NebulousGrid posters={shows}>
        </NebulousGrid>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query ProgrammingGalleryQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProgrammingProject(sort: { title: ASC } ) {
      edges{
        node {
          title
          image{
            gatsbyImageData(
              layout: CONSTRAINED, 
              placeholder: BLURRED,
              quality: 90,
              width: 150,
            )
          }
          venue
          ld
        }
      }
    }
  }
`
