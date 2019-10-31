import React from "react"

import Layout from "../components/layout"
import ActionCard from "../components/ActionCard"
import Logo from "../components/images/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faQuestion,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="homepage">
      <div className="highlights">
        <ActionCard
          heading="Visit our new"
          subheading="Sampling Location"
          info="We recently opened up a shop to provide a taste-testing opportunity for our customers."
          buttonText="Learn more"
          link="/new"
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} className="action-icons pin" />
        </ActionCard>

        <ActionCard
          heading="Want or Need"
          subheading="To Learn About the Bean"
          info="Do you want top become more familiar with coffee? We can even show you some fun facts!"
          buttonText="Learn more"
          link="/learn"
        >
          <FontAwesomeIcon
            icon={faQuestion}
            className="action-icons question"
          />
        </ActionCard>

        <ActionCard
          heading="Want to Save?"
          subheading="Sign up for our newsletter!"
          info="With the quick insert of your email, you can get offers as good as our coffee!"
          buttonText="Sign up"
          link="/contact"
        >
          <FontAwesomeIcon icon={faPiggyBank} className="action-icons pig" />
        </ActionCard>
      </div>
      <div className="slogan">
        <Logo className="homepage-logo" />
        <h2>"From the ground up"</h2>
      </div>
      <div className="image-holder">
        <h2>
          We strive for both quality and convenience. <br /> Finding coffee
          should be as easy as drinking it.
        </h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
