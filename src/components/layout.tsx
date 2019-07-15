import * as styles from '#styles/base.css'
import { graphql, Link, StaticQuery } from 'gatsby'
import * as React from 'react'

import Header from './header'

const Layout: React.FunctionComponent = ({ children }) => (
  <>
    <div className="with-sidebar">
      <div>
        <Header />
        <main className={styles.dummy}>
          <div className="center-container">{children}</div>
        </main>
      </div>
    </div>
  </>
)

export default Layout
