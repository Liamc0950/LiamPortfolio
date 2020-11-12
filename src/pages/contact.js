import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { UncontrolledCarousel } from 'reactstrap';
import Navigation from '../components/navigation'
import styles from '../pages/contact.module.css'

class Contact extends React.Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const shows = get(this, 'props.data.allContentfulShow.edges')

    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Navigation fixed="top" data={author.node} shows={shows}/>
        <div className={styles.contact}>
          <Helmet title={siteTitle} />
          <div>Contact me at Liam.P.Corley@sewanee.edu</div>
        </div>
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query Contact {
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
