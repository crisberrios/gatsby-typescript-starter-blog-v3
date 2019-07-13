import * as styles from '#styles/base.css'
import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'

import Header from './header'

const Layout: React.SFC = ({ children }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={styles.main}
        >
          {children}
        </div>
      </>
    )}
  />
)

export default Layout
