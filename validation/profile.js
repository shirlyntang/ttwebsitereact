const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.yearMajor = !isEmpty(data.yearMajor) ? data.yearMajor : "";
  data.hometown = !isEmpty(data.hometown) ? data.hometown : "";
  data.pledgeClass = !isEmpty(data.pledgeClass) ? data.pledgeClass : "";
  data.whyIJoinTT = !isEmpty(data.whyIJoinTT) ? data.whyIJoinTT : "";
  data.whatIEnjoyAboutTT = !isEmpty(data.whatIEnjoyAboutTT)
    ? data.whatIEnjoyAboutTT
    : "";
  data.bio = !isEmpty(data.bio) ? data.bio : "";

  if (!validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle must between 2 and 40 character";
  }
  if (validator.isEmpty(data.yearMajor)) {
    errors.yearMajor = "Year and Major is required";
  }
  if (validator.isEmpty(data.hometown)) {
    errors.hometown = "Hometown is required";
  }
  if (validator.isEmpty(data.pledgeClass)) {
    errors.pledgeClass = "Pledge Class field is required";
  }
  if (validator.isEmpty(data.whyIJoinTT)) {
    errors.whyIJoinTT = "Why did you join Theta Tau :O";
  }
  if (validator.isEmpty(data.whatIEnjoyAboutTT)) {
    errors.whatIEnjoyAboutTT = "What do you enjoy about Theta Tau :)";
  }
  if (validator.isEmpty(data.bio)) {
    errors.bio = "Tell me about yourself :)";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
