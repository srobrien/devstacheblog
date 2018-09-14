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
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />
    <Header data={data} location={location} />
    <div
      style={{
        marginLeft: 20,
        marginRight: "auto",
        maxWidth: 1240,
        padding: "0px 0.5rem 1.45rem",
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
