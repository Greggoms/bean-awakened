import React from "react"
import { Link } from "gatsby"

const ActionCard = props => (
  <div className="action">
    <div className="headings">
      <h2 className="action-heading">{props.heading}</h2>
      <h3 className="action-subheading">{props.subheading}</h3>
    </div>
    <p className="action-info">{props.info}</p>
    <div className="action-cta">
      <Link to={props.link} className="action-link">
        {props.buttonText}
      </Link>
      <div className="action-svg">{props.children}</div>
    </div>
  </div>
)

export default ActionCard
