import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social">
        <li>
          <FontAwesomeIcon icon={faTwitter} className="social-icons twitter" />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faFacebookF}
            className="social-icons facebook"
          />
        </li>
        <li>
          <FontAwesomeIcon
            icon={faInstagram}
            className="social-icons instagram"
          />
        </li>
      </ul>

      <p>&copy; Terry Julian 2019</p>
    </footer>
  )
}

export default Footer
