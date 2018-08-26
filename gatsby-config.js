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
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!--end-->`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify-cms",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Fira Sans\:300,400`, "Arimo:400, 700"],
      },
    },
  ],
};
