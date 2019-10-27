import React from "react"

import Layout from "../components/layout"
import Logo from "../components/Logo.js"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="homepage">
      <h1>Blah Blah sample text</h1>
      <div className="highlights">
        <div className="item item-1">1</div>
        <div className="item item-2">2</div>
        <div className="item item-3">3</div>
      </div>
      <div className="slogan">
        <Logo className="homepage-logo" />
        <h2>"From the ground up"</h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
