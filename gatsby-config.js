//CONTENTFUL API KEY 
if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  require('dotenv').config({ path: './.env.development'})
}
const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

module.exports = {
  siteMetadata: {
    title: `LIAM CORLEY`,
    description: `Theatrical Lighting Designer and Lighting Programmer.`,
    author: `@Liam-Corley`,
    siteUrl: `https://liam-corley.com/`,
    menuLinks:[
      {
        name:'LIGHTING DESIGN',
        link:'/'
      },
      {
        name:'PAPERWORK',
        link:'/paperwork-gallery'
      },
      {
        name:'RESUME',
        link:'/resume'
      },
      {
        name:'CONTACT',
        link:'/contact'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
