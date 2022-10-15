import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Container, Navbar, Nav } from "react-bootstrap"


const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <Container>
      <Navbar expand="lg" variant="dark" style={{backgroundColor: 'black', padding: '1%'}} className="fixed-top">
        <Navbar.Brand href="/"><h1>{siteTitle}</h1></Navbar.Brand>
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
