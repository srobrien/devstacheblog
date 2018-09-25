import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Welcome to Devstache, follow me as I blindly fumble around the web',
            },
            {
              name: 'keywords',
              content:
                'web development,blog,javascript,node,react,redux,gatsby,graphql,open university,software developer,html,css',
            },
            {
              name: 'robots',
              content: 'index,follow',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Header data={data} location={location} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
      </div>
    )}
  />
)



export default Layout
