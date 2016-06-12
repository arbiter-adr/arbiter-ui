import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/index';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class FooterComponent extends Component {
  constructor(props){
      super(props);
  }


  componentDidMount() {
    console.log('Footer Loaded');

    console.log(this.props);
  }

  render(){
    return (
      <Navbar fixedBottom>
        <Navbar.Header>
          <Navbar.Brand>
            Arbiter <small>(c) 2016</small>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight={true} >
          <NavDropdown id={'Footer'} eventKey={1} title={"About"}>
            <MenuItem eventKey={1.1}>Terms of Use</MenuItem>
            <MenuItem eventKey={1.2}>Contact</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    Transactions : state.Transactions,
    Claims : state.Claims,
    Disputes : state.Disputes
  }
}

const Footer = connect(mapStateToProps)(FooterComponent);

export default Footer;
