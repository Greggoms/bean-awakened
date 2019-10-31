import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import BeanBelt from "../components/images/BeanBelt"

const LearnPage = () => (
  <Layout>
    <SEO title="Learn" />
    <div className="learn-page">
      <BeanBelt />
      <div className="learn-where">
        <h2>Where do we get our coffee?</h2>
        <p>
          Coffee comes from everywhere, but the best comes from THE BELT. The
          coffee belt has the best conditions for plants to thrive. These
          conditions include ideal shading, rain, and cool temperatures. So this
          area is where we give the most of our attention
        </p>
      </div>
      <div className="learn-facts">
        <h2>
          Did <br /> You <br /> Know
        </h2>
        <p>Coffee beans are actually pits from fruit - specifically cherries</p>
        <p> Coffee is the world's second largest trading commodity</p>
        <p> 63% of American adults drink coffee on a daily basis</p>
        <p>Robusta beans have a higher caffeine content that Arabica beans</p>
        <p>
          A coffee plant can live up to 100 years, but usually around 40-50
          years
        </p>
      </div>
    </div>
  </Layout>
)

export default LearnPage
