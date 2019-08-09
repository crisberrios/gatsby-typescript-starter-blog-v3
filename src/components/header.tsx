import { graphql, Link, StaticQuery } from 'gatsby'
import * as React from 'react'
import Image from '../components/image'

interface HeaderProps {
  siteTitle?: string
}

const Header: React.FunctionComponent<HeaderProps> = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            author
          }
        }
      }
    `}
    render={data => (
      <header>
        <div className="center-container stack">
          <div className="flex-wrap align-items:center">
            <div className="mobile-25-desktop-100">
              <div className="margin:auto profile-image">
                <Image filename="avatar.png" alt={data.author} />
              </div>
            </div>
            <div className="mobile-75-desktop-100">
              <h1 className="font-size:lg-2 margin-bottom:sm-1">
                <Link to="/">{data.site.siteMetadata.title}</Link>
              </h1>
              <p className="font-size:sm-3 stack-no-gap max-width:none">
                Lorem ipsum dolor amet authentic austin marfa, gentrify bicycle
                rights occupy roof party XOXO farm-to-table plaid pug paleo.
                Selvage before they sold out microdosing, salvia skateboard
                wayfarers pop-up iPhone synth beard four dollar toast fanny pack
                meh.
              </p>
            </div>
          </div>
          <nav>
            <ul className="flex-wrap flex-wrap-sidebar justify-content:space-evenly">
              <li>
                <a href="/">Articles</a>
              </li>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">Contact me</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )}
  />
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
