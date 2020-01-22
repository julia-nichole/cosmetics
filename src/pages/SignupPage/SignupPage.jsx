import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm'
import { Box, Form } from "grommet";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <Box flex align="center" >
          <Form>
        <div className="SignupPage">
          <SignupForm {...this.props} updateMessage={this.updateMessage} />
          <p>{this.state.message}</p>
        </div>
        </Form>
      </Box>
    );
  }
}

export default SignupPage;