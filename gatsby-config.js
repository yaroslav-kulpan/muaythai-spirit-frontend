module.exports = {
  siteMetadata: {
    title: `Muay Thai Spirit Gym`,
    description: `Muay Thai Spirt Gym Site`,
    author: `Yaroslav Kulpan`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Muay Thai Spirit Gym`,
        short_name: `Spirit Gym`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/muaythai-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/projects/*`],
        workboxConfig: {
          globPatterns: ['**/*']
        }
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Override the file regex for SASS
        sassRuleTest: /\.global\.s([ac])ss$/,
        // Override the file regex for CSS modules
        sassRuleModulesTest: /\.mod\.s([ac])ss$/,
      },
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
      }
    },
  ],
}
