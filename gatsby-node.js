exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  console.log("gatsby-node.js is running!")
  
  const result = await graphql(`
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
  `)
  
  if (result.errors) {
    console.error("GraphQL errors:", result.errors)
    return
  }
  
  console.log("Found shows:", result.data.allContentfulShow.edges.length)
  
  result.data.allContentfulShow.edges.forEach(({ node }) => {
    console.log(`Creating page for: ${node.title}`)
    
    createPage({
      path: `/shows/${node.title}/`,
      component: require.resolve(`./src/templates/show-page.js`),
      context: {
        id: node.id,
      },
    })
  })
}