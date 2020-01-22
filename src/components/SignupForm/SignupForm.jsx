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
    Header,
  } from "grommet";


class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
            <Box fill align="center" justify="center">
            <Heading level={2} size="large">Sign Up</Heading>
            <Box width="large" pad="medium">
              <Form
                onReset={event => console.log(event)}
                onSubmit={this.handleSubmit}
              >
                <FormField
                  label="Full name:"
                  name="name"
                  value={this.state.name}
                  required
                  onChange={this.handleChange}
                  validate={{ regexp: /^[a-z]/i }}
                />
                <FormField
                  label="Email:"
                  name="email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                  validate={{ regexp: /^[a-z]/i }}
                />
      
                <FormField
                  label="Password:"
                  name="password"
                  type="password"
                  required
                  value={this.state.password}
                  onChange={this.handleChange}
                  validate={{ regexp: /^[a-zA-Z0-9]{5,}$/, message: "password should be 5 charecters or longer" }}
                />
                <FormField
                  label="Confirm Password:"
                  name="passwordConf"
                  type="password"
                  required
                  value={this.state.passwordConf}
                  onChange={this.handleChange}
                  validate={{ regexp: /^[a-zA-Z0-9]{5,}$/, message: "password should be 5 charecters or longer" }}
                />
               
                <Box direction="row" justify="between" pad="medium">
                  <Button label="Cancel" href="/" />
                  <Button  type="submit" label="Sign Up" primary  disabled={this.isFormInvalid()}/>
                </Box>
              </Form>
            </Box>
          </Box>
      
      
      
      
            
          );
        }
      }
      

export default SignupForm;