const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const showPage = path.resolve('./src/templates/show-page.js')
    resolve(
      graphql(
        `
          {
            allContentfulShow {
              edges {
                node {
                  title
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const shows = result.data.allContentfulShow.edges
        shows.forEach((show, index) => {
          createPage({
            path: `/shows/${show.node.title}/`,
            component: showPage,
            context: {
              title: show.node.title
            },
          })
        })
      })
    )
  })
}
