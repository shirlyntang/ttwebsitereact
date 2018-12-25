const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const dotenv = require("dotenv");
// const multipart = require("connect-multiparty");
// const multipartMiddleware = multipart();
// const busboy = require("connect-busboy");
// const busboyBodyParser = require("busboy-body-parser");
const path = require("path");

dotenv.config();

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");

const app = express();

//app.use(busboy());

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(busboyBodyParser());

//db config
const db = require("./config/keys").mongoURI;

//connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

//use routes
app.use("/api/users", users);
app.use("/api/profile", profile);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on Port ${port}`));
