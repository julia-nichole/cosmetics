import React, { Component } from "react";
import * as catAPI from '../../utils/cats-api';
import CatListPage from '../../pages/CatListPage/CatListPage';
import AddCatPage from '../../pages/AddCatPage/AddCatPage';
import EditCatPage from '../../pages/EditCatPage/EditCatPage';
import { Route, Switch } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import HomePage from "../HomePage/HomePage";
import NavBars from '../../components/NavBars/NavBars'
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
    cats: [],
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


  handleAddCat = async newCtData => {
    const newCat = await catAPI.create(newCtData);
    this.setState(state => ({
      cats: [...state.cats, newCat]
    }), () => this.props.history.push('/'));
  }

  handleUpdateCat= async updatedCtData => {
    const updatedCat = await catAPI.update(updatedCtData);
    const newCatsArray = this.state.cats.map(p => 
      p._id === updatedCat._id ? updatedCat : p
    );
    this.setState(
      {cats: newCatsArray},
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/')
    );
  }

  handleDeleteCat = async (id) => {
    await catAPI.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      cats: state.cats.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }

  async componentDidMount() {
    const cats = await catAPI.getAll();
    this.setState({cats});
  }


  render(props) {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <NavBars
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
                <MainBody 
                  user={this.state.user}
                  history={this.props.history}
                handleSignupOrLogin={this.handleSignupOrLogin}
                handleAddCat={this.handleAddCat}
                handleDeleteCat={this.handleDeleteCat}
                handleUpdateCat={this.handleUpdateCat}
                props={this.props}
                cats={this.state.cats} />
               
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;