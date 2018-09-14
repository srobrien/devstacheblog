module.exports = {
  siteMetadata: {
    title: "Devstache",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
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

    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 400,
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
