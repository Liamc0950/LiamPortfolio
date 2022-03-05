import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Container, Navbar, Nav } from "react-bootstrap"

import * as styles from './header.module.css'

const Header = ({ siteTitle, menuLinks }) => (
  <header className="bg-dark">
    <Container>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive"/>
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul">
            {menuLinks.map(link => (
                  <Nav.Item as="li">
                    <Link to={link.link} className="nav-link" activeClassName="active">
                      {link.name}
                    </Link>
                  </Nav.Item>
            ))}        
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
