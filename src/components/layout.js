import React from 'react'
import { Link } from 'gatsby'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import get from 'lodash/get'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        {children}
        <Footer></Footer>
      </Container>
    )
  }
}

export default Template
