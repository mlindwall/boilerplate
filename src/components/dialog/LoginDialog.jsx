import React, { Component } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormHelperText,
  InputAdornment, TextField,
  withStyles
} from "material-ui";
import { AccountCircle, VpnKey } from "@material-ui/icons";
import { inject, observer } from 'mobx-react';

const styles = theme => ({
  dialog: {
    width: "50vw",
    maxWidth: 450
  },
  margin: {
    marginBottom: 12
  },
  formControl: {
    width: '100%'
  },
});

@inject("auth")
@observer
class LoginDialog extends Component {

  render() {

    let { auth, classes } = this.props;
    let { closeDialog, openRegisterDialog } = auth;

    return(
      <Dialog
        open={ true }
        onClose={ closeDialog }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={ classes.dialog } id="alert-dialog-title">{"Sign in"}</DialogTitle>
        <DialogContent>
          <FormControl className={classes.formControl} error aria-describedby="name-error-text">
            <TextField
                autoFocus
                fullWidth
                className={classes.margin}
                id="username"
                label="Username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
          </FormControl>
          <br />
          <TextField
            fullWidth
            className={classes.margin}
            id="password"
            label="Password"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              ),
            }}
          />
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ openRegisterDialog } color="primary">
            Register
          </Button>
          <Button onClick={ closeDialog } color="primary" autoFocus>
            Sign in
          </Button>
        </DialogActions>
      </Dialog>
    )

  }

}

export default withStyles(styles)(LoginDialog);