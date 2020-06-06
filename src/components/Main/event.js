import React from 'react'
import { Link } from 'gatsby'
import GoogleIcon from '../../images/icons8-google.svg'
import EventImage from '../../images/activities.svg'
import FeatureImage from '../shared/featureImage'
const Event = ({ event }) => {
  const backgroundImage = event.featureImage
    ? event.featureImage.childImageSharp.fixed.src
    : EventImage
  return (
    <Link to={`/${event.slug}`}>
      <div className="card">
        <div className="img-avatar">
          <img src={GoogleIcon} alt="Google Icon" />
        </div>
        <div className="card-text">
          <div
            className="portada"
            style={{
              backgroundImage: `url("${backgroundImage}")`,
            }}
          ></div>
          <div className="title-total">
            <div className="title">{event.date}</div>
            <h4>{event.title}</h4>

            <div className="desc">{event.excerpt}</div>
            <div className="actions">
              <button>
                <i className="fa fa-heart"></i>
              </button>
              <button>
                <i className="fa fa-envelope"></i>
              </button>
              <button>
                <i className="fa fa-user"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Event
