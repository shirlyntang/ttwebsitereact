const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// profile model
const Profile = require("../../models/Profile");
// user model
const User = require("../../models/Users");

const validateProfileInput = require("../../validation/profile");

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
    .populate("user", ["name", "email"])
    .then(profile => {
      if (!profile) {
        errors.noProfile = "There is no profile for this user.";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @router  POST api/profile
// @desc    Create or edit user profile
// @access  private
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

module.exports = router;
