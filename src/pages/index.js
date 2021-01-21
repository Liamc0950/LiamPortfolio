import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import ArticlePreview from '../components/article-preview'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UncontrolledCarousel } from 'reactstrap';
import '../components/base.css';
import { sortBy } from 'lodash'
import styles from './index.module.css'
import Slider from '../components/Slider'
import ImageSlide from '../components/ImageSlide';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const shows = get(this, 'props.data.allContentfulShow.edges')

    const items = [];
    //create list of carousel ImageSlides
    for (var i=0; i<shows.length; i++){
      items.push(<ImageSlide 
                    src={shows[i].node.coverImage.file.url} 
                    title={shows[i].node.title} 
                    position={shows[i].node.discipline}>
                  </ImageSlide>
                )
    }

    return (
      <Layout location={this.props.location}>
        <Navigation fixed="top" data={author.node} shows={shows}/>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          {/* <UncontrolledCarousel className={styles.carousel} items={items} /> */}
          <Slider items={items}></Slider>
        </div>
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    allContentfulShow(sort: { fields: [createdAt], order: ASC }) {
      edges{
        node {
          title
          showCredits
          createdAt
          discipline
          coverImage {
            file {
              url
            }
            fluid(resizingBehavior: PAD) {
              src
            }  
          }
          images {
            id
          }
        }
      }
    }
  }
`
