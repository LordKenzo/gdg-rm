import React from 'react'
import Banner from './banner'
import AboutUs from './aboutUs'
import Events from './events'

const Main = () => {
  return (
    <main>
      <Banner />
      <AboutUs />
      <Events />

      <section className="activities">
        <p>
          <strong>What we do?</strong>
        </p>
        <p>
          Google Developer Groups (GDGs) are for developers who are interested
          in Google's developer technology.
        </p>
        <p>About different Google technologies.</p>
        <img
          src="../../images/angular.svg"
          width="30vh"
          alt="Angular technology logo"
        />
        <img
          src="../../images/cloud.svg"
          width="30vh"
          alt="Cloud technology logo"
        />
        <img
          src="../../images/android.svg"
          width="30vh"
          alt="Android technology logo"
        />
        <img
          src="../../images/actions.png"
          width="30vh"
          alt="Actions on Google technology logo"
        />
        <img
          src="../../images/firebase.svg"
          width="30vh"
          alt="Firebase technology logo"
        />
        <img
          src="../../images/tensorflow.svg"
          width="30vh"
          alt="Tensor Flow technology logo"
        />
        <div className="list-activities">
          <div className="activity1">
            <h5>Talks</h5>
            <i className="fa fa-hand-spock-o" aria-hidden="true"></i>
            <p>Get updated with the latest news and announcements</p>
          </div>
          <div className="activity2">
            <h5>Codelabs</h5>
            <i className="fa fa-laptop" aria-hidden="true"></i>
            <p>
              Get hands-on experience and guidance from the community members
            </p>
          </div>
          <div className="activity3">
            <h5>Meetings</h5>
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            <p>
              Share knowledge in different Companies, colleges and universities
            </p>
          </div>
          <div className="activity4">
            <h5>Webinar</h5>
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
            <p>Share knowledge using webinar on internet</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
