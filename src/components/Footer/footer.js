import React from 'react'

const Footer = () => {
  return (
    <footer>
      <ul className="color-bar">
        <li className="color-blue"></li>
        <li className="color-red"></li>
        <li className="color-yellow"></li>
        <li className="color-green"></li>
      </ul>
      <section className="contacts">
        <div>
          <p>
            Puoi contattarci scrivendoci una email o iscrivendoti al nostro
            gruppo Slackware. Potete contattarci per avere informazioni,
            proporre un talk o se volete inviarci suggerimenti in merito
            all'organizzazione della community.
          </p>
        </div>
        <div>
          <p>Alcuni link utili:</p>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div>
          <p>Vorremmo essere anche più presenti sui social network:</p>
          <ul>
            <li>
              <i className="icon fa fa-facebook-square" aria-hidden="true"></i>
            </li>
            <li>
              <i className="icon fa fa-twitter" aria-hidden="true"></i>
            </li>
            <li>
              <i className="icon fa fa-instagram" aria-hidden="true"></i>
            </li>
            <li>
              <i className="icon fa fa-youtube-square" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </section>
      <div className="credits">Made with love by us!</div>
    </footer>
  )
}

export default Footer
