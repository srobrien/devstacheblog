import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content:
            "Welcome to Devstache, follow me as I blindly fumble around the web",
        },
        {
          name: "keywords",
          content:
            "web development,blog,javascript,node,react,redux,gatsby,graphql,open university,software developer,html,css",
        },
        {
          name: "robots",
          content: "index,follow",
        },
      ]}
    />
    <Header data={data} location={location} />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query LayoutData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
