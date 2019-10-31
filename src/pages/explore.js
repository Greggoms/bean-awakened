import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Product from "../components/Product"

const LearnPage = () => {
  const [region, setRegion] = useState(true)
  const [type, setType] = useState(false)
  const [roast, setRoast] = useState(false)

  function handleSetRegion() {
    setRegion(true)
    setType(false)
    setRoast(false)
  }
  function handleSetType() {
    setType(true)
    setRegion(false)
    setRoast(false)
  }
  function handleSetRoast() {
    setRoast(true)
    setType(false)
    setRegion(false)
  }

  return (
    <Layout>
      <SEO title="Explore" />
      <div className="explore-page">
        <div className="tabs">
          <h2 className="active" onClick={handleSetRegion}>
            Region
          </h2>
          <h2 onClick={handleSetType}>Type</h2>
          <h2 onClick={handleSetRoast}>Roast</h2>
        </div>
        <div className="item-container">
          {region && (
            <>
              <div className="africa farm">
                <Product title="Africa" className="africa" />
              </div>
              <div className="arabian farm">
                <Product title="Arabian Peninsula" className="arabian" />
              </div>
              <div className="indonesia farm">
                <Product title="Indonesia" className="indonesia" />
              </div>
              <div className="asia farm">
                <Product title="Asia" className="asia" />
              </div>
              <div className="central farm">
                <Product title="Central America" className="central" />
              </div>
              <div className="south farm">
                <Product title="South America" className="south" />
              </div>
            </>
          )}
          {type && (
            <>
              <div className="best type">
                <Product title="Best Sellers" className="best" />
              </div>
              <div className="flavored type">
                <Product title="Flavored Coffee" className="flavored" />
              </div>
              <div className="decaf type">
                <Product title="Decaf Flavored Coffee" className="decaf" />
              </div>
              <div className="decaffeinated type">
                <Product title="Decaf" className="decaffeinated" />
              </div>
              <div className="espresso type">
                <Product title="Espresso" className="espresso" />
              </div>
              <div className="half type">
                <Product title="Half Caff" className="half" />
              </div>
              <div className="signature type">
                <Product title="Signature Blends" className="signature" />
              </div>
              <div className="organic type">
                <Product title="Organic" className="organic" />
              </div>
            </>
          )}
          {roast && (
            <>
              <div className="light roast">
                <Product title="Light Roast" className="light" />
              </div>
              <div className="medium roast">
                <Product title="Medium Roast" className="medium" />
              </div>
              <div className="medium-dark roast">
                <Product title="Medium Dark Roast" className="medium-dark" />
              </div>
              <div className="dark roast">
                <Product title="Dark Roast" className="dark" />
              </div>
              <div className="double roast">
                <Product title="Double Roast" className="double" />
              </div>
              <div className="espresso roast">
                <Product title="Espresso" className="espresso" />
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default LearnPage
