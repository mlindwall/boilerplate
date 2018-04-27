import React, { Component } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputAdornment, TextField,
  withStyles
} from "material-ui";
import { AccountCircle, VpnKey, Email } from "@material-ui/icons";
import { inject, observer } from 'mobx-react';

const styles = theme => ({
  dialog: {
    width: "50vw",
    maxWidth: 450
  },
  margin: {
    marginBottom: 12
  },
});

@inject("auth")
@observer
class RegisterDialog extends Component {

  render() {

    let { auth, classes } = this.props;
    let { closeDialog, openLoginDialog } = auth;

    return (
      <Dialog
        open={ true }
        onClose={ closeDialog }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={ classes.dialog } id="alert-dialog-title">{ "Register" }</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            className={ classes.margin }
            id="username"
            label="Username"
            InputProps={ {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle/>
                </InputAdornment>
              ),
            } }
          />
          <TextField
            autoFocus
            fullWidth
            className={ classes.margin }
            id="email"
            type="email"
            label="Email"
            InputProps={ {
              startAdornment: (
                <InputAdornment position="start">
                  <Email/>
                </InputAdornment>
              ),
            } }
          />
          <br/>
          <TextField
            fullWidth
            className={ classes.margin }
            id="password"
            label="Password"
            type="password"
            InputProps={ {
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKey/>
                </InputAdornment>
              ),
            } }
          />
          <TextField
            fullWidth
            className={ classes.margin }
            id="vpassword"
            label="Verify Password"
            type="password"
            InputProps={ {
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKey/>
                </InputAdornment>
              ),
            } }
          />
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ openLoginDialog } color="primary" autoFocus>
            Sign in
          </Button>
          <Button onClick={ closeDialog } color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    )

  }

}

export default withStyles(styles)(RegisterDialog);