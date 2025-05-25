import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Row, Col } from 'react-bootstrap'
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { graphql } from 'gatsby'
import * as styles from '../templates/show-page.module.css'

const ShowPageTemplate = ({ data, location }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  
  const show = data?.contentfulShow
  const siteTitle = data?.site?.siteMetadata?.title
  const images = show?.images || []

  // Convert images for lightbox
  const lightboxSlides = images.map(image => ({
    src: image.file.url,
  }))

  const openLightbox = (index) => {
    setPhotoIndex(index)
    setLightboxOpen(true)
  }

  // Create gallery rows (same logic)
  const galleryRows = []
  const colLimit = 3
  galleryRows[0] = []

  for(let i = 0, j = 0, k = 0; i < images.length; i++){
    if(j < colLimit){
      galleryRows[k].push({ image: images[i], index: i })
      j++
    } else {
      k++
      j = 1
      galleryRows[k] = []
      galleryRows[k].push({ image: images[i], index: i })
    }
  }

  return (
    <Layout location={location}>
      <div style={{ paddingTop: '80px' }}>
      <Helmet title={siteTitle} />
      <div>
        <div className='row'>
          <div className="col-lg-4">
            <div className={styles.showInfoPane}>
              <h2>{show.title}</h2>
              <div>
                {show.showCredits.map((credit, idx) => (
                  <div key={idx}>{credit}</div>
                ))}
              </div>
              <div className='mt-4'>
                <p>{renderRichText(show.richDescription)}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            {galleryRows.map((row, rowIdx) => (
              <Row className="g-0" key={rowIdx}>
                {row.map(({ image, index }) => (
                  <Col key={index}>
                    <div 
                      onClick={() => openLightbox(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      <GatsbyImage 
                        image={getImage(image)} 
                        alt={show.title}
                      />
                    </div>
                  </Col>              
                ))}
              </Row>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={photoIndex}
        slides={lightboxSlides}
      />
      </div>
    </Layout>
  )
}

export default ShowPageTemplate


export const pageQuery = graphql`
  query ShowPageQuery($id: String!) {
    contentfulShow(id: { eq: $id }) {
      title
      showCredits
      richDescription {
        raw
      }
      images {
        file{
          url
        }
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          quality: 50
        )
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
