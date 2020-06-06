import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useMetadataQuery } from '../../hooks'
import { ThemeContext } from '../../context/themeProvider'
import BodyClassName from 'react-body-classname'
import Footer from '../Footer/footer'
import Header from '../Header/header'
import '../../styles/main.scss'

const Layout = ({ children }) => {
  const [darkTheme] = useContext(ThemeContext)
  const { title } = useMetadataQuery()
  return (
    <>
      <BodyClassName className={`${darkTheme ? 'dark' : 'light'}`} />
      <Header siteTitle={title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
