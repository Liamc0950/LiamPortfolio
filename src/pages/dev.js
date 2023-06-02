import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Banner from '../components/Banner'
import DevLanding from '../components/DevLanding'
import DevHeader from '../components/DevHeader'
import Projects from '../components/Projects'
import Footer from '../components/Footer'


import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Row, Col } from 'react-bootstrap'
import { GatsbyImage } from "gatsby-plugin-image"
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";


class Dev extends React.Component {
  render() {

    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
    //   <DevLayout location={this.props.location}>
        <div>
          <DevHeader title={siteTitle}/>
          <Helmet title={siteTitle} />
          <DevLanding title={siteTitle}/>
          <Banner title={siteTitle} />
          <Projects title={siteTitle} />
          <Footer></Footer>
        </div>
    //   </DevLayout>
    )
  }
}

export default Dev

export const pageQuery = graphql`
  query Dev {
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
