import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import HomePage from "../HomePage/HomePage";
import NavBar from '../../components/NavBar/NavBar'
import userService from "../../utils/userService";
import MainBody from "../../components/MainBody/MainBody";
import Sidebar from "../../components/SideBar/SideBar";
import theme from "../../../src/Theme.json"
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  ResponsiveContext,
 } from 'grommet';
import "./App.css";

class App extends Component {
  state = {
    showSidebar: false,
    user: userService.getUser()
  };

  handleSideClick = () =>
    this.setState(prevState => ({ showSidebar: !prevState.showSidebar }));

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  render(props) {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <NavBar
                user={this.state.user}
                handleSideClick={this.handleSideClick}
                handleLogout={this.handleLogout}
              />
              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                <Sidebar
                  user={this.state.user}
                  size={size}
                  showSidebar={showSidebar}
                  handleSideClick={this.handleSideClick}
                  handleLogout={this.handleLogout}
                />
                <MainBody handleSignupOrLogin={this.handleSignupOrLogin} />
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;