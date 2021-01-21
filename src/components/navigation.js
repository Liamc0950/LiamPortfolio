import React, { useState } from 'react';
import { Link } from 'gatsby'
import styles from './navigation.module.css'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return <div>
        <Navbar dark fixed="top" className={styles.Navigation}>
          <Link to="/">
            <NavbarBrand to="/" className="mr-auto">
              <h1>{this.props.data.name}</h1>
              <h5>{this.props.data.title}</h5>
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className={styles.Navigation}navbar>
              <UncontrolledDropdown nav inNavbar className={styles.Dropdown}>
                <DropdownToggle nav caret>
                LIGHTING DESIGN
                </DropdownToggle>
                <DropdownMenu right className={styles.DropdownMenu}> 
                  {this.props.shows.map(({ node }) => {
                  const link = "/shows/" + node.title;
                  console.log(link)
                  return (
                    <DropdownItem dropdown-item>
                      <Link to={link} style={{color: 'white'}}>{node.title}</Link>
                    </DropdownItem>
                  )
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/resume" className={styles.NavItem}>
                    RESUME
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className={styles.NavItem}>
                    CONTACT
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>;
  }
}

//export default Example;


/* class Navigation extends React.Component {

  render() { 
    const Example = (props) => {
      const [isOpen, setIsOpen] = useState(false);
    
      const toggle = () => setIsOpen(!isOpen);
    
      return (
      
      <Navbar className="navbar" bg="dark" expand="lg" variant="dark fixed-top">
      <Navbar.Brand href="#home"><h1>{data.name}</h1><h5>{data.title}</h5></Navbar.Brand>
      <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto">
            <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              LIGHTING DESIGN
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              SCENIC DESIGN
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Nav.Link href="#link">RESUME</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>
          </Nav>
        </Collapse>
      </Navbar>
    )
    }
  }
}
export default Navigation
 */

/* <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
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

          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>

 */