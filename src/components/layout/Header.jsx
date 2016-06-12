import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/index';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class HeaderComponent extends Component {
  constructor(props){
      super(props);
  }


  componentDidMount() {
    console.log('Header Loaded');

    console.log(this.props);
  }

  render(){
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            Arbiter
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight={true} >
          <NavDropdown id={'header'} eventKey={1} title={"Claims"}>
            <MenuItem eventKey={1.1}>Open Claims</MenuItem>
            <MenuItem eventKey={1.2}>New Claim</MenuItem>
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

const Header = connect(mapStateToProps)(HeaderComponent);

export default Header;
