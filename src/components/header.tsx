import * as React from 'react'
import Image from '../components/image'

interface HeaderProps {
  siteTitle?: string
}

const Header: React.FunctionComponent<HeaderProps> = () => (
  <header>
    <div className="center-container">
      <div className="margin:auto profile-image">
        <Image />
      </div>
      <h1 className="font-size:lg-2">Merlo Spumi</h1>
      <nav className="max-width:50% margin:auto">
        <ul>
          <li><a href="/">Articles</a></li>
          <li><a href="#">About me</a></li>
          <li><a href="#">Contact me</a></li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
