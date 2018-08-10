import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "./TextFieldGroup";
import TextAreaFieldGroup from "./TextAreaFieldGroup";
import ImageFieldGroup from "./ImageFieldGroup";
import { createProfile, getCurrentProfile } from "../actions/profileActions";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      yearMajor: "",
      pledgeClass: "",
      hometown: "",
      whyIJoinTT: "",
      whatIEnjoyAboutTT: "",
      bio: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      this.setState({
        handle: profile.handle,
        yearMajor: profile.yearMajor,
        pledgeClass: profile.pledgeClass,
        hometown: profile.hometown,
        whyIJoinTT: profile.whyIJoinTT,
        whatIEnjoyAboutTT: profile.whatIEnjoyAboutTT,
        bio: profile.bio
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const profileData = {
      handle: this.state.handle,
      yearMajor: this.state.yearMajor,
      pledgeClass: this.state.pledgeClass,
      hometown: this.state.hometown,
      whyIJoinTT: this.state.whyIJoinTT,
      whatIEnjoyAboutTT: this.state.whatIEnjoyAboutTT,
      bio: this.state.bio
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Profile</h1>

              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile url!"
                />
                <TextFieldGroup
                  placeholder="* Year and Major"
                  name="yearMajor"
                  value={this.state.yearMajor}
                  onChange={this.onChange}
                  error={errors.yearMajor}
                  info="What's your year and major :3"
                />
                <TextFieldGroup
                  placeholder="* Pledge Class"
                  name="pledgeClass"
                  value={this.state.pledgeClass}
                  onChange={this.onChange}
                  error={errors.pledgeClass}
                  info="Which did you cross in?"
                />
                <TextFieldGroup
                  placeholder="* Hometown"
                  name="hometown"
                  value={this.state.hometown}
                  onChange={this.onChange}
                  error={errors.hometown}
                  info="Where are you from?"
                />
                <TextFieldGroup
                  placeholder="* Why did you Join Theta Tau"
                  name="whyIJoinTT"
                  value={this.state.whyIJoinTT}
                  onChange={this.onChange}
                  error={errors.whyIJoinTT}
                  info="What was the reason you join Theta Tau?"
                />
                <TextFieldGroup
                  placeholder="* What do you enjoy most about Theta Tau?"
                  name="whatIEnjoyAboutTT"
                  value={this.state.whatIEnjoyAboutTT}
                  onChange={this.onChange}
                  error={errors.whatIEnjoyAboutTT}
                  info="What is your favorite thing about Theta Tau?"
                />
                <TextAreaFieldGroup
                  placeholder="* Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Talk about yourself and your accomplishments!!"
                />
                <ImageFieldGroup name="file" />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
