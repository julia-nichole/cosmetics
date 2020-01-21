import React from "react";
// import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import MainList from "../MainList";
import AddMain from "../AddMain";
import { MainProvider } from "../MainContext";

const HomePage = props => {
  return (
    <MainProvider>
      <div className="HomePage">
        <NavBar user={props.user} handlelogout={props.handlelogout} />
        <MainList />
        <AddMain />
      </div>
    </MainProvider>
  );
};

export default HomePage;