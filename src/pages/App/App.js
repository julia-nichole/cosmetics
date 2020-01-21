import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";

import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }


  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div >
        <header className='header-footer'> </header>
        <Switch>
          <Route exact path="/" render={(props) =>
            <HomePage user={this.state.user} handleLogout={this.handleLogout} />
          }
          />
          <Route exact path="/login" render={({ history }) =>
            <LoginPage 
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path="/signup" render={({ history }) =>
            <SignupPage 
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }
          />
        </Switch>
      </div>
    )
  }
}

export default App;