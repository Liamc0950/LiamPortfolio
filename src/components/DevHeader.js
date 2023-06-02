import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Container, Navbar, Nav } from "react-bootstrap"
import { FaArrowCircleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa"


const DevHeader = ({ siteTitle, menuLinks }) => (
  <header>
    <Container>
      <Navbar expand="lg" variant="dark" style={{backgroundColor: 'black', padding: '1%'}} className="fixed-top">
          <Nav as="ul">
                  <Nav.Item as="li">
                    <Link to={"/"} className="nav-link" activeClassName="active">
                    <FaArrowLeft size="1em" style={{ marginBottom: '5px' }}/>{} LX
                    </Link>
                  </Nav.Item>
          </Nav>
      </Navbar>
    </Container>
  </header>
)

DevHeader.propTypes = {
  siteTitle: PropTypes.string,
}

DevHeader.defaultProps = {
  siteTitle: ``,
}

export default DevHeader
