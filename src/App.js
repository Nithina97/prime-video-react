import React, { Component, Fragment } from "react";
import HeaderComponent from "./Components/Header/HeaderComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import Login from "./Components/Auth/LoginComponent";
import Register from "./Components/Auth/RegisterComponent";
import PasswordReset from "./Components/Auth/PasswordResetComponent";
import PageNotFoundComponent from "./Components/PagenotFound/PageNotFoundComponent";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Router>
          <header>
            <HeaderComponent />
          </header>
          <ToastContainer />
          <main>
            <Switch>
              <Route path="/" exact component={HomeComponent} />

              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/password-reset" exact component={PasswordReset} />
              <Route path="**" component={PageNotFoundComponent} />
            </Switch>
          </main>
        </Router>
      </Fragment>
    );
  }
}

export default withRouter(App);

/*--------
App.js is the root component file and it holds global
 state for all sub-component
*/