module.exports = {
  siteMetadata: {
    title: `DeliveryNow Service`,
    description: `DeliveryNow Service is the go-to platform for real-time on-demand delivery of your takeout orders.`,
    author: `Bute Systems`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
        background_color: `#fc8019`,
        theme_color: `#fc8019`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/assets/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          
            `limelight`,
            `source sans pro\:300,400,400i,700`
          
        ],
        display: 'swap'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'deliverynow.ng',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint: '', // add your MC list endpoint here; see instructions from gatsby's website
    //   },
    // },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://deliverynow.ng',
        sitemap: 'https://deliverynow.ng/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
