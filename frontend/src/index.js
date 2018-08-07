import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthTokens";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import { clearCurrentProfile } from "./actions/profileActions";
import PrivateRoute from "./components/privateRoute";

import EditProfile from "./editProfile";
import CreateProfile from "./CreateProfile";
import Register from "./register";
import Login from "./login";
import store from "./store";
import Dashboard from "./dashboard";

import Actives from "./actives";
import Alumni from "./alumni";
import Brotherhood from "./brotherhood";
import Hist from "./history";
import Professional from "./professional";
import Rush from "./rush";
import Service from "./service";
import Home from "./home";

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
            <Switch>
              <Route path="/actives" component={Actives} />
              <Route path="/alumni" component={Alumni} />
              <Route path="/brotherhood" component={Brotherhood} />
              <Route path="/history" component={Hist} />
              <Route path="/professional" component={Professional} />
              <Route path="/service" component={Service} />
              <Route path="/rush" component={Rush} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
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
              <Route path="/" component={Home} />
              <Route render={() => <h3>404 not found</h3>} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
