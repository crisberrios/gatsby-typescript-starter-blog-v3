import { Link } from 'gatsby'
import * as React from 'react'

interface HeaderProps {
  siteTitle?: string
}

const Header: React.FunctionComponent<HeaderProps> = () => (
  <header>
    <div className="center-container">
      <nav className="max-width:50% margin:auto">
        <ul>
          <li>Nav</li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
