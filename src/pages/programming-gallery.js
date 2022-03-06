import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import '../components/base.css';

import { GatsbyImage } from "gatsby-plugin-image"
import { Row, Col } from 'react-bootstrap'




class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const shows = get(this, 'props.data.allContentfulShow.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
          <Row className="g-0">
            {shows.map(show=> (
              <Col lg={4} md = {4} sm = {6} xs = {6}>
                <Link to={"/shows/" + show.node.title + "/"}>
                  <GatsbyImage image={show.node.coverImage.gatsbyImageData} alt={'alt text'}/>
                </Link>
              </Col>
            ))}
          </Row>
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
    allContentfulShow(filter: {prog: {eq: true}}, sort: { fields: [sortOrder], order: ASC }) {
      edges{
        node {
          title
          showCredits
          sortOrder
          createdAt
          coverImage{
            gatsbyImageData(
              layout: CONSTRAINED, 
              placeholder: BLURRED,
              quality: 90,
            )
          }
        }
      }
    }
  }
`
