import React ,{Component} from "react";
import { Box, Button, Heading, Grommet } from "grommet";

import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignupPage from "../../pages/SignupPage/SignupPage";
import userService from "../../utils/userService";
import * as catAPI from '../../utils/cats-api';
import CatListPage from '../../pages/CatListPage/CatListPage';
import AddCatPage from '../../pages/AddCatPage/AddCatPage';
import EditCatPage from '../../pages/EditCatPage/EditCatPage';

class  MainBody extends Component {

  async componentDidMount() {
    const cats = await catAPI.getAll();
    console.log(cats)
    this.setState({cats});
  }




  
  render(){

 
  return (
    // <BrowserRouter>
      <Switch>
        <Route exact path="/" render={({history}) => <HomePage history={history}   />} />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            userService.getUser() ?
            <Redirect to='/' />
            :
            <LoginPage 
            history={history} 
            handleSignupOrLogin={this.props.handleSignupOrLogin} />
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
              handleSignupOrLogin={this.props.handleSignupOrLogin}
            />
          )}
        />
<Route
            exact
            path="/add"
            render= {({ history }) => (
              <AddCatPage
              history={history}
              user={this.props.user}
              handleLogout={this.props.handleLogout}
              handleAddCat={this.props.handleAddCat}  
              />
            )}
          />

<Route
            exact
            path="/catlist"
            render= {({ history }) => (
              <CatListPage
              history={history}
              handleLogout={this.props.handleLogout}
              user={this.props.user}
              handleDeleteCat={this.props.handleDeleteCat}
              handleUpdateCat={this.props.handleUpdateCat}
              cats={this.props.cats}
              props={this.props}
              />
            )}
          />

<Route
            exact
            path="/edit"
            render= {({ location}) => (
              <EditCatPage
              handleUpdateCat={this.props.handleUpdateCat}
              location={location}

              />
            )}
          />
        <Box flex align="center" justify="center">
          
        </Box>
      </Switch>
    // </BrowserRouter>
  );
}
}
export default MainBody;