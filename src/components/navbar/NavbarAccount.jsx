import React, { Component } from 'react';
import { IconButton, Menu, MenuItem, withStyles } from "material-ui";
import { AccountCircle } from "@material-ui/icons";
import { inject, observer } from 'mobx-react';

const styles = {
  navbarRight: {}
};

@inject("auth")
@observer
class NavbarAccount extends Component {

  state = {
    anchorEl: null,
    open: true
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closeMenu = () => this.setState({ anchorEl: null });

  login = () => {
    this.setState({ anchorEl: null });
    this.props.auth.openLoginDialog();
  };

  register = () => {
    this.setState({ anchorEl: null });
    this.props.auth.openRegisterDialog();
  };

  render() {

    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-owns={ open ? 'menu-appbar' : null }
          aria-haspopup="true"
          onClick={ this.handleMenu }
          color="inherit"
        >
          <AccountCircle/>
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={ anchorEl }
          anchorOrigin={ { vertical: 'top', horizontal: 'right', } }
          transformOrigin={ { vertical: 'top', horizontal: 'right', } }
          open={ open }
        >
          <MenuItem onClick={ this.login }>Sign in</MenuItem>
          <MenuItem onClick={ this.register }>Register</MenuItem>
        </Menu>
      </div>
    )

  }

}

export default withStyles(styles)(NavbarAccount);