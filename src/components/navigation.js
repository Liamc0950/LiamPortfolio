import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default ({ data }) => (
  <Navbar className="navbar" bg="dark" expand="lg" variant="dark fixed-top">
    <Navbar.Brand href="#home">{data.name}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4"> Separated link </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)


{/* <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
    <a class="navbar-brand col-md-9" href="\#"><h1 class="text-white">LIAM CORLEY</h1><h5 class = "text-white"> LIGHTING DESIGNER </h3></a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/#">PORTFOLIO<span class="sr-only">(current)</span></a>
        </li>
        {% if department_list %}
          {% for dept in department_list %}
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown{{dept}}" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{dept|upper}}
              </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              {% for show in dept.getShows %}
              <a class="dropdown-item" href="/{{show.id}}">{{show}}</a>
              {% endfor %}
            </div>
          </li>
          {% endfor %}
        {% endif %}
      </ul>
    </div>
</nav>
 */}