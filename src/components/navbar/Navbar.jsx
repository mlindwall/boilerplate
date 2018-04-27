import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from "material-ui";
import NavbarAccount from "./NavbarAccount.jsx";

export default class Navbar extends Component {

  render() {

    return(
      <AppBar position="static" color="default">
        <Toolbar style={ { display: 'flex', justifyContent: 'space-between', background: '#fff' }}>
          <Typography variant="title" color="inherit">
            Boilerplate
          </Typography>
          <NavbarAccount />
        </Toolbar>
      </AppBar>
    )

  }

}