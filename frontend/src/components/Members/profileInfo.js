import React, { Component } from "react";

import "../../css/profileInfo.css";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="container">
     
        <img className="image"
          id="profileImage"
          src={profile.uploadedFileCloudinaryUrl}
          alt="profileimage1"
        />
        
        <div className="info">
          <div className="category">Handle: </div> <div >{profile.handle}</div><div/>
          <div className="category">Year/Major: </div> <div >{profile.yearMajor}</div><div/>
          <div className="category">Pledge Class: </div> <div >{profile.pledgeClass}</div><div/>
          <div className="category">Hometown: </div> <div >{profile.hometown}</div><div/>
          <div className="category">Why I joined Theta Tau: </div> <div >{profile.whyIJoinTT}</div><div/>
          <div className="category">What I enjoy about Theta Tau: </div> < div >{profile.whatIEnjoyAboutTT}</div><div/>
          <div className="category">About me: </div> < div >{profile.bio}</div><div/>
          <div className="category">LinkedIn: </div> <div ><a href={profile.linkedIn}>Click Here</a></div><div/>
          <div className="category">Status: </div> <div >{profile.activeOrAlumni}</div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
