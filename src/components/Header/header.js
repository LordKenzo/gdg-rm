import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/themeProvider'
import { useMenuQuery } from '../../hooks/useMenuQuery'
import Nav from './nav'

const Header = ({ siteTitle }) => {
  const [, setDarkTheme] = useContext(ThemeContext)
  const menu = useMenuQuery()

  const toggleTheme = () => {
    setDarkTheme(prev => {
      localStorage.setItem('theme', !prev)
      return !prev
    })
  }
  return (
    <header className="site-header">
      <Nav menu={menu} toggleTheme={toggleTheme} />
      <div className="hero">
        <a href="#events">
          <span className="hero-logo icon fa fa-podcast"></span>
          <h1>Benvenuto nel sito di GDG Roma</h1>
          <p>Scopri tutti i nostri eventi!</p>
        </a>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
