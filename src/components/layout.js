/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 import Header from "./header"
 import Footer from "./footer"
 import 'bootstrap/dist/css/bootstrap.min.css';
 

 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
           menuLinks{
             name
             link
           }
         }
       }
     }
   `)
 
   return (
    <>
      <Header menuLinks={data.site.siteMetadata.menuLinks} 
              siteTitle={data.site.siteMetadata.title} 
      />
      <main className="content">{children}</main>
      <Footer></Footer>
    </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 