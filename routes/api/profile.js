const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
// const AWS = require("aws-sdk");
// const S3FS = require("s3fs");
// const fs = require("fs");
// const path = require("path");
// const multiparty = require("connect-multiparty");
// const multipartyMiddleware = multiparty();

// const s3fsImpl = S3FS(process.env.BUCKET_NAME, {
//   accessKeyId: process.env.SECRET_KEY_ID,
//   secretAccessKey: process.env.SECRET_ACCESS_KEY
// });

// var multer = require("multer");
// var storage = multer.diskStorage({
//   filename: function(req, file, callback) {
//     callback(null, Date.now() + file.originalname);
//   }
// });
// var imageFilter = function(req, file, cb) {
//   // accept image files only
//   if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
//     return cb(new Error("Only image files are allowed!"), false);
//   }
//   cb(null, true);
// };
// var upload = multer({ storage: storage, fileFilter: imageFilter });

// var cloudinary = require("cloudinary");
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET_KEY
// });

//s3fsImpl.create();
// profile model
const Profile = require("../../models/Profile");
// user model
const User = require("../../models/Users");

const validateProfileInput = require("../../validation/profile");

// function uploadToS3(file) {
//   let s3bucket = new AWS.S3({
//     accessKeyId: process.env.IAM_USER_KEY,
//     secretAccessKey: process.env.IAM_USER_SECRET,
//     Bucket: process.env.BUCKET_NAME
//   });
//   s3bucket.createBucket(function() {
//     var params = {
//       Bucket: process.env.BUCKET_NAME,
//       Key: file.name,
//       Body: file.data
//     };
//     s3bucket.upload(params, function(err, data) {
//       if (err) {
//         console.log("error in callback");
//         console.log(err);
//       }
//       console.log("success");
//       console.log(data);
//     });
//   });
// }

// @router  GET api/profile/test
// @desc    test profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works!" }));

// @router  GET api/profile
// @desc    get user profile
// @access  private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "email"])
      .then(profile => {
        if (!profile) {
          errors.noProfile = "There is no profile for this user.";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @router  GET api/profile/all
// @desc    Get all profiles
// @access  public

router.get("/all", (req, res) => {
  const errors = {};

  Profile.find()
    .populate("user", ["name", "email"])
    .then(profiles => {
      if (!profiles) {
        profiles.errors = "There are no profiles";
        res.status(404).json(errors);
      }
      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profiles: "There are not Profiles" }));
});

// @router  GET api/profile/handle/:handle
// @desc    Get Profile by handle
// @access  public
router.get("/handle/:handle", (req, res) => {
  const errors = {};
  Profile.findOne({ handle: req.params.handle })
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @router  POST api/profile
// @desc    Create or edit user profile
// @access  private

//router.use(multipartyMiddleware);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);
    //Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    //Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.yearMajor) profileFields.yearMajor = req.body.yearMajor;
    if (req.body.pledgeClass) profileFields.pledgeClass = req.body.pledgeClass;
    if (req.body.hometown) profileFields.hometown = req.body.hometown;
    if (req.body.whyIJoinTT) profileFields.whyIJoinTT = req.body.whyIJoinTT;
    if (req.body.whatIEnjoyAboutTT)
      profileFields.whatIEnjoyAboutTT = req.body.whatIEnjoyAboutTT;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.linkedIn) profileFields.linkedIn = req.body.linkedIn;

    // console.log(req.files);
    // cloudinary.v2.uploader.upload(req.file.path, (err, result) => {
    //   if (err) console.log(err);
    // });

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        //update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        //create

        //check if handle exists
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            errors.handle = "Handle already exists";
            res.status(400).json(errors);
          }
          //save profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

// router.use(multipartyMiddleware);

router.post(
  "/uploadfiles",
  passport.authenticate("jwt", { session: false }),
  function(req, res) {
    const currentUpload = {
      uploadedFileCloudinaryUrl: req.body.uploadedFileCloudinaryUrl
    };
    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        //update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: currentUpload },
          { new: true }
        )
          .then(profile => res.json(profile))
          .catch(err => console.log(err));
      }
    });
  }
);

// router.post(
//   "/uploadfiles",
//   passport.authenticate("jwt", { session: false }),
//   function(req, res) {
//     var file = req.files[0];
//     var stream = fs.createReadStream(file.path);
//     return s3fsImpl
//       .writeFile(file.originalFilename, stream)
//       .then(function(err) {
//         fs.unlink(file.path, function(err) {
//           if (err) console.log(err);
//         });
//         var currentUpload = `https://s3-us-west-1.amazonaws.com/image-upload-test-07302018/${
//           file.originalFilename
//         }`;
//         Profile.findOne({ user: req.user.id }).then(profile => {
//           if (profile) {
//             //update
//             Profile.findOneAndUpdate(
//               { user: req.user.id },
//               { $set: currentUpload },
//               { new: true }
//             )
//               .then(profile => res.json(profile))
//               .catch(err => console.log(err));
//           }
//         });
//       });
//   }
// );

module.exports = router;
