import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import NavBar from "./navbar";

const Layout = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
