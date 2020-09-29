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

class Resume extends React.Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const shows = get(this, 'props.data.allContentfulShow.edges')

    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
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
          <div>{author.name}</div>
          <div></div>
        </div>
      </Layout>
    )
  }
}

export default Resume

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
