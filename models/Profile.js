const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  yearMajor: {
    type: String,
    required: true
  },
  pledgeClass: {
    type: String,
    required: true
  },
  hometown: {
    type: String,
    required: true
  },
  whyIJoinTT: {
    type: String,
    required: true
  },
  whatIEnjoyAboutTT: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  linkedIn: {
    type: String,
    required: true
  },
  activeOrAlumni: {
    type: String,
    required: true
  },
  uploadedFileCloudinaryUrl: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
