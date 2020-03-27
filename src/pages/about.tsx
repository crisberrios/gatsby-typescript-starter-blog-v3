import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

interface PostNode {
  node: {
    excerpt: string
    frontmatter: {
      date: string
      title: string
    }
    fields: {
      slug: string
    }
  }
}

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
    allMarkdownRemark: {
      edges: PostNode[]
    }
  }
}

class IndexPage extends React.Component<IndexPageProps, {}> {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout noSidebar={true}>
        <SEO
          title="About"
          keywords={['blog', 'gatsby', 'javascript', 'react']}
        />
        <h2>About</h2>
        <p>
          Lorem ipsum dolor amet wolf fanny pack ut distillery, chambray hell of
          leggings duis taxidermy readymade pour-over. Non hell of hot chicken
          biodiesel banh mi food truck paleo vaporware lyft culpa. Selvage venmo
          in meditation, id beard synth cillum organic crucifix. Ullamco
          jianbing intelligentsia ipsum viral, pok pok farm-to-table knausgaard
          hell of pariatur in qui occupy. Echo park velit try-hard tote bag
          cloud bread officia meditation.
        </p>
        <p>
          Offal tacos fugiat polaroid cillum street art, hell of hexagon dolor
          subway tile organic readymade. Lo-fi nostrud thundercats, microdosing
          squid seitan man braid whatever offal meh laborum. Gochujang banh mi
          quinoa duis wayfarers lyft lomo fingerstache green juice XOXO
          pour-over cornhole bicycle rights tumeric ennui. Ut tote bag ugh
          consectetur sed voluptate poke ea lorem minim kombucha pour-over
          franzen etsy locavore. Culpa meditation marfa, echo park pickled
          aliqua cillum ethical hell of est pinterest duis organic kogi.
        </p>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
