import React, { Fragment } from 'react'
import Footer from './Footer'
import Header from './Header'
import Seo from './Seo'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Seo />
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
