const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
// const slugify = require(`slugify`)

// const slugifyOptions = {
//    replacement: '-',
//    remove: /[$*_+~.()'"!\-:@]/g,
//    lower: true
//  }


exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions
   return new Promise((resolve, reject) => {
     graphql(
      `
      {
        allContentfulShow {
          edges {
            node {
              title
              id
            }
          }
        }
      }
      `
    )
       .then(result => {
         if (result.errors) {
           reject(result.errors)
         }
 
         // Create Sub Pages
         const pageTemplate = path.resolve(`./src/templates/show-page.js`)
         _.each(result.data.allContentfulShow.edges, edge => {

           // Here's the beef
           createPage({
             path: `/shows/${edge.node.title}/`,
             component: slash(pageTemplate),
             context: {
               id: edge.node.id
             },
           })

         })
         resolve()
       })
   })
 }
