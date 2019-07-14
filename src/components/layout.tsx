import * as styles from '#styles/base.css'
import { graphql, Link, StaticQuery } from 'gatsby'
import * as React from 'react'

import Header from './header'

const Layout: React.FunctionComponent = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="with-sidebar">
          <div>
            <Header />
            <main className={styles.dummy}>
              <h1>
                <Link to="/">{data.site.siteMetadata.title}</Link>
              </h1>
              <div className="center-container">{children}</div>
            </main>
          </div>
        </div>
      </>
    )}
  />
)

export default Layout
