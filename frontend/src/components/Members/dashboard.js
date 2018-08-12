import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import "../../css/dashboard.css";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile == null || loading) {
      dashboardContent = <h4>loading...</h4>;
    } else {
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div className="container">
            <img id="profileImage" src={profile.uploadedFileCloudinaryUrl} />
            <p className="welcome">Welcome {user.name}</p>
            <div>Handle: {profile.handle}</div>
            <div>Year/Major: {profile.yearMajor}</div>
            <div>Pledge Class: {profile.pledgeClass}</div>
            <div>Hometown: {profile.hometown}</div>
            <div>Why I joined Theta Tau: {profile.whyIJoinTT}</div>
            <div>What I enjoy about Theta Tau: {profile.whatIEnjoyAboutTT}</div>
            <div>About me: {profile.bio}</div>
            <div>LinkedIn: {profile.linkedIn}</div>
            <div>Status: {profile.activeOrAlumni}</div>

            <div />
            <Link to="/edit-profile" className="btn btn-light">
              <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
            </Link>
            <Link to="/image-upload" className="btn btn-light">
              {" "}
              Upload Images{" "}
            </Link>
          </div>
        );
      } else {
        dashboardContent = (
          <div>
            <p className="lead text-muted"> Welcome {user.name}</p>
            <p>You have not yet set up a profile, please add some info.</p>
            <Link to="/create-profile" className="btn btn-lg  btn-info">
              Create Profile{" "}
            </Link>
          </div>
        );
      }
    }
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
