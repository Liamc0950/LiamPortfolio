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
    const galleryRows = [];

    //instantiate the first row as an array
    galleryRows[0] = [];

    for(let i = 0, j = 0, k=0; i<shows.length; i++){
      //if the current galleryRow is not full
      if(j < colLimit){
        //add show[i] to the given galleryRow array
        galleryRows[k].push(shows[i])
        //and increment the column count for that row
        j++;
      }
      else{
        k++;
        j=1;
        //create an array for the new galleryRow
        galleryRows[k] = [];
        //then show[i] to the new galleryRow
        galleryRows[k].push(shows[i])
      }
    }

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
          {galleryRows.map(row => (
            <Row className="g-0">
              {row.map(show=>(
                <Col>
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
          ))}
          {/* <Row>
            {shows.map(show=> (
              <Col lg={4} md = {4} sm = {6}>
                <Link to={"/shows/" + show.node.title + "/"}>
                  <GatsbyImage image={show.node.coverImage.gatsbyImageData} alt={'alt text'}/>
                </Link>
              </Col>
            ))}
          </Row> */}
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
            )
          }
        }
      }
    }
  }
`
