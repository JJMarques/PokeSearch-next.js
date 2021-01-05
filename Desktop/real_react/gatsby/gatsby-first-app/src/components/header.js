import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import './header.css'

const Header = () => (
  <StaticQuery 
    query={
      graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
          sitePlugin {
            pluginOptions {
              theme_color
            }
          }
        }
      `
    }
    render={data=>(
      <header style={{background: data.sitePlugin.pluginOptions.theme_color}}>
        <h1>
          {data.site.siteMetadata.title}
        </h1>
      </header>
    )}
  />
)

export default Header
