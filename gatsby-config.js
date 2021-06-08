module.exports = {
  siteMetadata: {
    siteTitle: `Ishan Sheth (imsheth)`,
    defaultTitle: `Ishan Sheth (imsheth)`,
    siteTitleShort: `Ishan Sheth (imsheth)`,
    siteDescription: `Ishan Sheth (imsheth) is a seasoned polyglot and can be found in the terminal, the browser, eating, cooking or amongst nature. As a software engineer, he has experienced the rollercoaster journeys of building products from the ground up, onboarding the first customers for products which were eventually acquired and has also offered specialized consultations to corporations which operate at a multi million dollar scale. Owing to this he has got communication, bringing order to chaos and closure under his belt, which are now his forte. Trance music gets him high and keeps him going on with life.`,
    siteUrl: `https://imsheth.com`,
    siteAuthor: `@theimsheth`,
    siteImage: `meta/imsheth-banner.png`,
    siteLanguage: `en`,
    themeColor: `#231F20`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/imsheth/imsheth.github.io`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `imsheth`,
        short_name: `imsheth`,
        description: `Ishan Sheth (imsheth) is a seasoned polyglot and can be found in the terminal, the browser, eating, cooking or amongst nature. As a software engineer, he has experienced the rollercoaster journeys of building products from the ground up, onboarding the first customers for products which were eventually acquired and has also offered specialized consultations to corporations which operate at a multi million dollar scale. Owing to this he has got communication, bringing order to chaos and closure under his belt, which are now his forte. Trance music gets him high and keeps him going on with life.`,
        start_url: `/`,
        lang: `en`,
        background_color: `#231F20`,
        theme_color: `#231F20`,
        display: `standalone`,
        icon: `static/meta/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-29341891-1`,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://imsheth.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
