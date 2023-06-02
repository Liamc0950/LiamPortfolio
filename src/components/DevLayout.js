/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 import Footer from "./footer"
 import 'bootstrap/dist/css/bootstrap.min.css';
 

 const DevLayout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQueryDev {
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
      <main className="content">{children}</main>
      <Footer></Footer>
    </>
   )
 }
 
 DevLayout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default DevLayout
 