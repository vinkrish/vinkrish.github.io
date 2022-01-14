module.exports = {
  siteMetadata: {
    title: `Home`,
    author: `Vinay`,
    description: `A personal blog.`,
    siteUrl: `https://vinkrish.github.io/`,
    social: {
      github: `vinkrish`,
      twitter: `vinkrishh`
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
              id: "GTM-NRQM2MG",
              includeInDevelopment: false,
            },
          },
          // {
          //   resolve: `gatsby-plugin-google-gtag`,
          //   options: {
          //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
          //     trackingIds: [
          //       "G-DPW0DW66DH", // Google Analytics / GA
          //     ],
          //     // This object is used for configuration specific to this plugin
          //     pluginConfig: {
          //       // Puts tracking script in the head instead of the body
          //       head: true,
          //     },
          //   },
          // },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              // Optional:
    
              // the github handler whose gists are to be accessed
              username: 'vinkrish',
    
              // a flag indicating whether the github default gist css should be included or not
              // default: true
              includeDefaultCss: true
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-196724725-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vinay's Blog`,
        short_name: `VinKrish`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/vinkrish.jpeg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-dark-mode'
  ],
}
