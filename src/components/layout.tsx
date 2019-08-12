import * as styles from '#styles/base.css'
import * as React from 'react'

import Header from './header'

const Layout: React.FunctionComponent<{ noSidebar: boolean }> = ({
  children,
  noSidebar,
}) => (
  <div className={noSidebar ? 'main-layout no-sidebar' : 'main-layout with-sidebar'}>
    <div>
      <Header />
      <main className={styles.dummy}>
        <div className="center-container">{children}</div>
      </main>
    </div>
  </div>
)

export default Layout
