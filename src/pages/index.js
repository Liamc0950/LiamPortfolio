import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import '../components/base.css';

import { GatsbyImage } from "gatsby-plugin-image"
import { Row, Col } from 'react-bootstrap'


import * as styles from './gallery.module.css'


class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const shows = get(this, 'props.data.allContentfulShow.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
            <Row className="g-0">
              {shows.map(show=>(
                <Col lg={4} md = {6} sm = {6}>
                  <div className={styles.wrapper}>
                    <Link to={"/shows/" + show.node.title + "/"}>
                      <GatsbyImage image={show.node.coverImage.gatsbyImageData} alt={'alt text'}/>
                      <div className={styles.overlay}>
                        <div className={styles.title}>
                          <h6 className='text-light'>{show.node.title}</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Col>              
              ))}
            </Row>
      </Layout>
    )

  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulShow(filter: {ld: {eq: true}}, sort: { fields: [sortOrder], order: ASC }) {
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
              aspectRatio: 1.33,
            )
          }
        }
      }
    }
  }
`
