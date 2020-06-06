import React from 'react'
import activitiesUrl from '../../images/activities.svg'
import { useAboutUsQuery } from '../../hooks/useAboutUsQuery'

const AboutUs = () => {
  const about = useAboutUsQuery()
  return (
    <section className="about-us">
      <h5>{about.title}</h5>

      <img src={activitiesUrl} alt="Activities" />

      <p>{about.description}</p>

      <button className="button">
        <i className="icon fa fa-facebook-square" aria-hidden="true"></i>
        {about.button1.text}
      </button>
      <button className="button">{about.button2.text}</button>
    </section>
  )
}

export default AboutUs
