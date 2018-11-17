import React from "react";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import request from "superagent";
import PropTypes from "prop-types";
import "../../css/uploadimage.css";
import { uploadImage } from "../../actions/profileActions";

const CLOUDINARY_UPLOAD_PRESET = "vru4thg1";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/uploadtestcloud/image/upload";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, res) => {
      if (err) {
        console.error(err);
      }

      if (res.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: res.body.secure_url
        });
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const imageLink = {
      uploadedFileCloudinaryUrl: this.state.uploadedFileCloudinaryUrl
    };
    this.props.uploadImage(imageLink, this.props.history);
  }

  render() {
    return (
      <div>
        <form>
          <div className="FileUpload">
            <Dropzone
              onDrop={this.onImageDrop.bind(this)}
              multiple={false}
              accept="image/*"
            >
              <div>Drop an image or click to select a file to upload.</div>
            </Dropzone>
          </div>

          <div className="container">
            {this.state.uploadedFileCloudinaryUrl === "" ? null : (
              <div>
                <p>{this.state.uploadedFile.name} </p>
                <img
                  id="profileImage"
                  src={this.state.uploadedFileCloudinaryUrl}
                  alt="profileimage1"
                />
              </div>
            )}
          </div>
        </form>
        <form onSubmit={this.onSubmit} id="btnsubmit">
          <input
            type="submit"
            value="Submit"
            className="btn btn-info btn-block mt-4"
          />
        </form>
      </div>
    );
  }
}

UploadImage.propTypes = {
  uploadImage: PropTypes.func.isRequired
};

export default connect(
  null,
  { uploadImage }
)(withRouter(UploadImage));
