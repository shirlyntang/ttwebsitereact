import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthTokens";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import { clearCurrentProfile } from "./actions/profileActions";
import PrivateRoute from "./components/Members/privateRoute";

import ActiveBrothers from "./components/Members/profilesActives";
import AlumniBrothers from "./components/Members/profilesAlumnis";
import ImageUpload from "./components/Members/uploadimage";
import EditProfile from "./components/Members/editProfile";
import CreateProfile from "./components/Members/CreateProfile";
import Register from "./components/Members/register";
import Login from "./components/Members/login";
import store from "./store";
import Dashboard from "./components/Members/dashboard";
import Profile from "./components/Members/profile";

import Footer from "./components/footer";
import Navbar from "./components/navbar";

//import Actives from "./components/MainPages/actives";
//import Alumni from "./components/MainPages/alumni";
import Brotherhood from "./components/MainPages/brotherhood";
import Hist from "./components/MainPages/history";
import Professional from "./components/MainPages/professional";
import Rush from "./components/MainPages/rush";
import Service from "./components/MainPages/service";
import Home from "./components/MainPages/home";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    //clear current profile
    store.dispatch(clearCurrentProfile());
    //redirect to login

    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/actives/:handle" component={Profile} />
            <Route exact path="/alumni" component={AlumniBrothers} />
            <Route exact path="/history" component={Hist} />
            <Route exact path="/professional" component={Professional} />
            <Route exact path="/brotherhood" component={Brotherhood} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/rush" component={Rush} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/actives" component={ActiveBrothers} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/image-upload"
                component={ImageUpload}
              />
            </Switch>
            <Route exact path="/" component={Home} />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
