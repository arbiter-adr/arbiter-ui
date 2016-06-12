import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/index';
import { } from 'react-bootstrap';


class BodyComponent extends Component {
  constructor(props){
      super(props);
  }


  componentDidMount() {
    console.log('Body Loaded');

    console.log(this.props);

  }

  render(){
    return (
      <div>Eventual Landing Page</div>
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

const Body = connect(mapStateToProps)(BodyComponent);

export default Body;
