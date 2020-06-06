import React from 'react'
import Layout from '../components/shared/layout'
import SEO from '../components/shared/seo'
import Main from '../components/Main/main'


const IndexPage = () => {
  

  return (
    <Layout>
      <SEO title="Home" />
      <Main />
     
    </Layout>
  )
}

export default IndexPage

/*
className={`${darkTheme ? 'theme-dark' : 'theme-light'}`}
*/
