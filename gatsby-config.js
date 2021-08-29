module.exports = {
  siteMetadata: {
    siteTitle: `Yonisfy Mohammed Elzanaty Frontend Docs`,
    defaultTitle: `Yonisfy Mohammed Elzanaty Frontend Docs`,
    siteTitleShort: `Yonisfy Mohammed Elzanaty Frontend Docs`,
    siteDescription: `The boat you need to get into your dreams`,
    siteUrl: `https://mohammedelzanaty.github.io/yonisfy/`,
    siteAuthor: `@mohammedelzanaty`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
    footer: 'Made with ❤️ by Mohammed Elzanaty © 2021',
    social: {
      linkedin: `https://www.linkedin.com/in/mohammedelzanaty129/`,
      youtube: `https://www.youtube.com/c/mohammedelzanatyacademy`
    }
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    'gatsby-plugin-dark-mode',
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/mohammedelzanaty/yonisfy`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yonisfy Mohammed Elzanaty Frontend Docs`,
        short_name: `Yonisfy Mohammed Elzanaty Frontend Doc`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-fontawesome-css`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `G-L2Q3XQ6K9E`
    //   }
    // },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-1126202017236279`
      }
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://mohammedelzanaty.github.io/yonisfy/`
      }
    },
    `gatsby-plugin-offline`
  ],
  pathPrefix: '/yonisfy'
}