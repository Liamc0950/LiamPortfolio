import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { UncontrolledCarousel } from 'reactstrap';
import Navigation from '../components/navigation'

// import styles from '../components/show-page.module.css'
import heroStyles from '../components/hero.module.css'

class ShowPageTemplate extends React.Component {
  render() {
    const show = get(this.props, 'data.contentfulShow')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const shows = get(this, 'props.data.allContentfulShow.edges')

    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const images = show.images;
    console.log(images)
    //const items = [];
    //create list of carousel items
    // for (var i=0; i<images.length; i++){
    //   items.push(
    //     {
    //       src: images[i].fluid.src,
    //       altText: images[i].node.title,
    //       caption: images[i].node.title.toUpperCase(),
    //       header: images[i].node.title.toUpperCase(),
    //       key: i
    //     }
    //   )
    // }    

    return (
      <Layout location={this.props.location}>
        <Navigation fixed="top" data={author.node} shows={shows}/>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          {/* <UncontrolledCarousel className={styles.carousel} items={items} /> */}
          <div>{show.title}</div>
          <div>{show.showCredits}</div>
          <div>{show.description.description}</div>
          <div></div>
        </div>
      </Layout>
    )
  }
}

export default ShowPageTemplate

export const pageQuery = graphql`
  query ShowByTitle($title: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulShow(title: { eq: $title }) {
      title
      coverImage {
        file {
          url
        }
        fluid {
          src
        }
        title
      }
      discipline
      description {
        description
      }
      showCredits
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
