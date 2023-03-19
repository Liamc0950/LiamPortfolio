import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'

import { GatsbyImage } from "gatsby-plugin-image"
import { Row, Col } from 'react-bootstrap'

import { renderRichText } from "gatsby-source-contentful/rich-text"

import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox'

import * as styles from '../templates/show-page.module.css'


class ShowPageTemplate extends React.Component {
  render() {
    const show = this.props.data.contentfulShow
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    const images = show.images;

    const galleryRows = [];
    const colLimit = 3;

    //instantiate the first row as an array
    galleryRows[0] = [];

    for(let i = 0, j = 0, k=0; i<images.length; i++){
      //if the current galleryRow is not full
      if(j < colLimit){
        //add show[i] to the given galleryRow array
        galleryRows[k].push(images[i])
        //and increment the column count for that row
        j++;
      }
      else{
        k++;
        j=1;
        //create an array for the new galleryRow
        galleryRows[k] = [];
        //then show[i] to the new galleryRow
        galleryRows[k].push(images[i])
      }
    }

    return (
      <Layout location={this.props.location}>
          <Helmet title={siteTitle} />
          <div>
            <div className='row'>
              <div class="col-lg-4">
                <div className={styles.showInfoPane}>
                  <h2>{show.title}</h2>
                  <div>
                    {show.showCredits.map(num => (
                      <div>{num}</div>
                    ))}
                  </div>
                  <div className='mt-4'><p>{renderRichText(show.richDescription)}</p></div>
                </div>
              </div>
              <div class="col-lg-8">
                <SimpleReactLightbox>
                  <SRLWrapper>
                    {galleryRows.map(row => (
                    <Row className="g-0">
                      {row.map(image=>(
                        <Col>
                          <GatsbyImage image={image.gatsbyImageData} alt={show.title}/>
                        </Col>              
                      ))}
                    </Row>
                    ))}
                  </SRLWrapper>
                </SimpleReactLightbox>
              </div>
            </div>
          </div>

      </Layout>
    )
  }
}

export default ShowPageTemplate

export const pageQuery = graphql`
  query pageQuery( $id : String! ) {
    contentfulShow( id: { eq: $id } ) {
      title
      showCredits
      richDescription{
        raw
      }
      sortOrder
      createdAt
      images{
        gatsbyImageData(
          layout: CONSTRAINED, 
          placeholder: BLURRED,
          quality: 50,
        )
      }
    }
  }
`
