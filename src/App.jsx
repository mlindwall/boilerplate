import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from "material-ui";
import HomePage from "./pages/home";
import Navbar from "./components/navbar";
import Theme from "./Theme";
import { inject, observer } from 'mobx-react';
import { LoginDialog, RegisterDialog } from "./components/dialog";

@inject("auth")
@observer
class App extends Component {

  render() {

    let { dialog } = this.props.auth;

    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={ HomePage } />
          { dialog === "login" && <LoginDialog />}
          { dialog === "register" && <RegisterDialog />}
        </div>
      </Router>
    )

  }

}

export default Theme(withStyles({})(App));