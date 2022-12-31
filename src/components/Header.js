import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const links = [
  { href: '/', text: 'Home' ,className:'nav-link'},
  { href: '/all-reviews', text: 'Reviews',className:'nav-link' },
  { href: '/add-review', text: 'Add Reviews',className:'nav-link' },
  { href: '#cata', text: 'Categories' ,className:'nav-link'},
  { href: '#test', text: 'Blogs' ,className:'nav-link'},
  { href: '#test2', text: 'News' ,className:'nav-link'},
  { href: '#busns', text: 'Adds', className:'nav-link' },
  { href: '/login', text: 'LOGIN',className:'nav-link' },
];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <Link  to={href} className={className}>{text}</Link>
  </NavItem>
);

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <Navbar className='px-md-5 text-dark' color="warning" light expand="md">
          <NavbarBrand href="/">MX-MART</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}