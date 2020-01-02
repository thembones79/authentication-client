import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import requireAuth from "./requireAuth";

class Feature extends Component {
  componentDidMount() {
    this.props.fetchMessage();
  }
  render() {
    return <div>This is the feature! {this.props.message}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(requireAuth(Feature));
