import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getProfileByHandle } from "../actions/profileActions";

class IndividualProfile extends Component {
  render() {
    return null;
  }
}

IndividualProfile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  profile: state.profile;
};

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(IndividualProfile);
