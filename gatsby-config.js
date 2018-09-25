module.exports = {
  siteMetadata: {
    title: "Devstache - Web developers blog",
  },
  plugins: [
		"gatsby-plugin-react-helmet",
		`gatsby-plugin-favicon`,
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "src", path: `${__dirname}/src` },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "img", path: `${__dirname}/src/images` },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "9ebxiovtt8p6",
        accessToken:
          "6006d21119cede78415d09188fa13ee7bff0c19ab4d39fd1e6b14a169c2b0987",
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-126280941-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },

    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 900,
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Fira Sans\:300,400`, "Arimo:400, 700"],
      },
    },
  ],
};
