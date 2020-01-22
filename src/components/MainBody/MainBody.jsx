import React from "react";
import { Box, Button, Heading, Grommet } from "grommet";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignupPage from "../../pages/SignupPage/SignupPage";
import userService from "../../utils/userService";

function MainBody(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            userService.getUser() ?
            <Redirect to='/' />
            :
            <LoginPage 
            history={history} 
            handleSignupOrLogin={props.handleSignupOrLogin} />
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            userService.getUser() ?
            <Redirect to='/' />
            :
            <SignupPage
              history={history}
              handleSignupOrLogin={props.handleSignupOrLogin}
            />
          )}
        />
        <Box flex align="center" justify="center">
          app body
        </Box>
      </Switch>
    </BrowserRouter>
  );
}

export default MainBody;