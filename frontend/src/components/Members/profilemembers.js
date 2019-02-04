import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactImageFallback from "react-image-fallback";
//import isEmpty from "../../validation/is-empty";
import "../../css/profilemembers.css";
import defaultPic from "../../images/default.png";
class ProfileMembers extends Component {
  
  render() {
 
    const { profile } = this.props;

    return (
      <div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="row">
            <div className="col-2">
            
              <ReactImageFallback
                src={profile.uploadedFileCloudinaryUrl}
                fallbackImage={defaultPic}
                id="profilepic"
                alt="individualprofilepic"
              />
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{profile.user.name}</h3>
              <Link to={`/actives/${profile.handle}`} className="btn btn-light mb-3 float-left">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileMembers.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileMembers;
