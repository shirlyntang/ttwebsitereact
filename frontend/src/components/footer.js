import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { clearCurrentProfile } from "../actions/profileActions";
import "../css/footer.css";

class Footer extends React.Component {
  /*onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }*/

  render() {
    /*
    const { isAuthenticated } = this.props.auth;

    const authLink = (
      <a href="" onClick={this.onLogoutClick.bind(this)}>
        Logout
      </a>
    );
    const guestLink = <Link to="/login">Member Login</Link>;
    */
    //html code: <div> {isAuthenticated ? authLink : guestLink}</div>
    return (
      <div>
        <section id="footer">
          <div className="container-fluid">
            <div className="row copyright-social">
              <div className="col-xs-12" />
              <p id="copyright">
                Copyright @ Theta Tau Colony - University of California, Santa
                Barbara
              </p>
              <p id="contact"> Contact us at: ucsbthetatau@gmail.com</p>
              <a href="https://www.facebook.com/UCSBThetaTau/">
                <img
                  id="fb-contact"
                  href="#"
                  alt="footer"
                  src="../images/Home/facebook.svg"
                  className="img-responsive center-block"
                />
              </a>
              <p id="copyright">Website Designed and Created By</p>
              <p> Ethan Su &amp; Andrew Doan </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
/*
Footer.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};*/

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Footer);
