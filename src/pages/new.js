import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Store from "../components/images/Store"
import Product from "../components/Product"

const NewPage = () => (
  <Layout>
    <SEO title="New" />
    <div className="learn-page">
      <Store />
      <div className="learn-where">
        <h2>Do you like the idea of some of our coffees?</h2>
        <p>
          We have a new location enabling people to taste-test some of our
          selections before buying a bag. Come see us! Our shop has a very
          laid-back and welcoming atmosphere, making the trip even more worth
          it.
        </p>
      </div>
      <div className="learn-facts">
        <h2>
          Our <br /> Faves
        </h2>
        <div className="fav">
          <Product title="Bean Fruit" />
          <div className="beanfruit"></div>
        </div>
        <div className="fav">
          <Product title="La Colombe" />
          <div className="colombe"></div>
        </div>
        <div className="fav">
          <Product title="Death Wish" />
          <div className="deathwish"></div>
        </div>
        <div className="fav">
          <Product title="Lavazza" />
          <div className="lavazza"></div>
        </div>
        <div className="fav">
          <Product title="Onyx" />
          <div className="onyx"></div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NewPage
