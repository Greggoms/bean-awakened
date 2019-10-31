import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons"
import GoogleMap from "../components/images/GoogleMap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact-page">
      <div className="location">
        <GoogleMap />
        <div className="location-info">
          <div>
            <FontAwesomeIcon icon={faMapMarkedAlt} className="location-icons" />
            <p>310 Congress Ave, Austin TX, 78701</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className="location-icons" />
            <p>+1 512-423-9373</p>
          </div>
        </div>
      </div>
      <div className="form">
        <h2>Send a Message</h2>
        <input className="input" type="text" placeholder="Full Name" />
        <input className="input" type="email" placeholder="Email" />
        <textarea
          name="textarea"
          id="textarea"
          placeholder="What would you like to say?"
        />
        <button>Send</button>
      </div>
      <div className="newsletter">
        <h2>Stay updated!</h2>
        <div>
          <input
            className="input newsletter-input"
            type="email"
            placeholder="What's your email?"
          />
          <button>Get Updates</button>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
