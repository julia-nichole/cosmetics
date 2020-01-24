import React from "react";
import {
  Anchor,
  Box,
  Button,
  Header,
  Layer,
  Nav,
  ResponsiveContext
} from "grommet";
import { Notification } from "grommet-icons";


const items = [
  { label: "Home", href: "/" },
  { label: "LOG IN ", href: "/login" },
  { label: "SIGN UP", href: "/signup" },
 
];
const itemsUser = [
  {label: "Cat list", href: "/catlist" },
  { label:'add cat', href:"/add" },

];


function NavBar(props) {
  return (
    props.user ? 
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
      {...props}
    >
      <Button icon={<Notification />} onClick={props.handleSideClick} />
    
      <Header pad="medium">
        <Nav direction="row">
          {itemsUser.map(item => (
            <Anchor href={item.href} label={item.label} key={item.label} />
            ))}
            <Anchor href="/" label="Log Out" key="Log Out" onClick={props.handleLogout} />
        </Nav>
      </Header>
      <p>Hello, {props.user.name}!</p>
    </Box>
    :
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
      {...props}
    >
      <Button icon={<Notification />} onClick={props.handleSideClick} />
      
      <Header pad="medium">
        <Nav direction="row">
          {items.map(item => (
            <Anchor href={item.href} label={item.label} key={item.label} />
          ))}
        </Nav>
      </Header>
      {/* Hello Grommet! */}
    </Box>
  );
}

export default NavBar;