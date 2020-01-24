import React, {Component} from 'react';
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
class AddCatPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      breed: 'Mixed',
      age: '0'
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddCat(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Add Cat</h1>
        <Form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
              <FormField>
            <label> Name (required)</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
            </FormField>
          </div>
          <div className="form-group">
          <FormField>
            <label> Breed (required)</label>
            <input
              className="form-control"
              name="breed"
              value={this.state.formData.breed}
              onChange={this.handleChange}
              required
            />
            </FormField>
          </div>
          <div className="form-group">
          <FormField>
            <label> Age</label>
            <input
              className="form-control"
              name="age"
              value={this.state.formData.age}
              onChange={this.handleChange}
            />
              </FormField>
          </div>
          <button
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD Cat
          </button>
        </Form>
      </>
    );
  }
}
export default AddCatPage;