import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import '../components/base.css';

import { GatsbyImage } from "gatsby-plugin-image"
import { Row, Col } from 'react-bootstrap'




class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const paperwork = get(this, 'props.data.allContentfulPaperwork.edges')



    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
              {paperwork.map(paperwork=>(
                <Row className='mt-5'>
                  <Col></Col>
                  <Col className='mx-auto col-5'>
                    <GatsbyImage image={paperwork.node.coverImage.gatsbyImageData} alt={'alt text'}/>
                    <h3 className='mt-2 text-light'>{paperwork.node.paperworkTitle}</h3>
                  </Col>
                  <Col></Col>
                </Row>     
              ))}
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query PaperworkGalleryQuery {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulPaperwork(sort: { fields: [sortOrder], order: ASC }) {
      edges {
        node {
          paperworkTitle
          coverImage{
            gatsbyImageData(
              layout: CONSTRAINED, 
              placeholder: BLURRED,
              quality: 100,
              resizingBehavior: FILL,
            )
          }
        }
      }
    }  
  }
`
