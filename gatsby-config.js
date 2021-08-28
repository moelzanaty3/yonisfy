module.exports = {
  siteMetadata: {
    siteTitle: `Younisfy Mohammed Elzanaty Frontend Docs`,
    defaultTitle: `Younisfy Mohammed Elzanaty Frontend Docs`,
    siteTitleShort: `Younisfy Mohammed Elzanaty Frontend Docs`,
    siteDescription: `The boat you need to get into your dreams`,
    siteUrl: `https://mohammedelzanaty.github.io/younisfy/`,
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
        repositoryUrl: `https://github.com/mohammedelzanaty/younisfy`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Younisfy Mohammed Elzanaty Frontend Docs`,
        short_name: `Younisfy Mohammed Elzanaty Frontend Doc`,
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
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-adsense`,
    //   options: {
    //     publisherId: `ca-pub-xxxxxxxxxx`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://mohammedelzanaty.github.io/younisfy/`
      }
    },
    `gatsby-plugin-offline`
  ],
  pathPrefix: '/younisfy'
}
