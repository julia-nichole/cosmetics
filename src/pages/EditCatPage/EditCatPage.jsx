import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
  import theme from "../../../src/Theme.json"

class EditCatPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.cat
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateCat(this.state.formData);
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
        <Grommet theme={theme} full>
        <Box fill align="center" justify="center">
       <Heading>Edit Gato </Heading>
       <Box width="large" pad="medium">
        <Form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
        
          <div className="form-group">
          <FormField>
            <label>Name (required)</label>
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
          <Box direction="row" justify="between" pad="medium">
          <Button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE 
          </Button>&nbsp;&nbsp;
         <Button> <Link to='/catlist'>CANCEL</Link></Button>
          </Box>
          
          </Form>
          </Box>
          </Box>
          </Grommet>
      </>
    );
  }
}

export default EditCatPage;