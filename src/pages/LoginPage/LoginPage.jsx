import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

import {
    Box,
    Button,
    CheckBox,
    Collapsible,
    Grommet,
    Heading,
    Form,
    FormField,
    RadioButtonGroup,
    RangeInput,
    Select,
    Text,
    TextArea,
    Header
  } from "grommet";

class LoginPage extends Component {
    state = {
      email: "",
      pw: ""
    };
    handleChange = e => {
      // implement in an elegant way
      this.setState({
        // Using ES2015 Computed Property Names
        [e.target.name]: e.target.value
      });
    };
  
    handleSubmit = async e => {
      e.preventDefault();
      try {
        // Update to call login instead of signup
        await userService.login(this.state);
        this.props.handleSignupOrLogin();
        // Successfully logged in - show home page
        this.props.history.push("/");
      } catch (err) {
        // Use a modal or toast in your apps instead of alert
        alert(`Invalid Credentials! Error: ${err}`);
      }
    };
    isFormInvalid() {
      return !(this.state.email && this.state.pw );
    }
    render() {
      return (
        <Box fill align="center" justify="center">
          <Heading level={2} size="large">
            Log in
          </Heading>
          <Box width="large" pad="medium">
            <Form
              onSubmit={this.handleSubmit}
            >
              <FormField
                label="Email:"
                name="email"
                type="email"
                value={this.state.email}
                required
                onChange={this.handleChange}
              />
              <FormField
                label="Password:"
                name="pw"
                type="password"
                placeholder="Enter password"
                required
                value={this.state.password}
                onChange={this.handleChange}
              />
  
              <Box direction="row" justify="between" pad="medium">
                <Button label="Cancel" href="/" />
                <Button
                  
                  type="submit"
                  label="Log In"
                  primary
                  disabled={this.isFormInvalid()}
                />
              </Box>
            </Form>
          </Box>
        </Box> 
      );
    }
  }
  
    export default LoginPage;