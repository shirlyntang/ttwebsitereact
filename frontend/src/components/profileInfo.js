import React, { Component } from "react";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="container">
        <img id="profileImage" src={profile.uploadedFileCloudinaryUrl} />
        <div>Handle: {profile.handle}</div>
        <div>Year/Major: {profile.yearMajor}</div>
        <div>Pledge Class: {profile.pledgeClass}</div>
        <div>Hometown: {profile.hometown}</div>
        <div>Why I joined Theta Tau: {profile.whyIJoinTT}</div>
        <div>What I enjoy about Theta Tau: {profile.whatIEnjoyAboutTT}</div>
        <div>About me: {profile.bio}</div>
        <div>LinkedIn: {profile.linkedIn}</div>
      </div>
    );
  }
}

export default ProfileHeader;
