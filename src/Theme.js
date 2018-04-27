import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import lightBlue from 'material-ui/colors/lightBlue';
import CssBaseline from 'material-ui/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    secondary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[700],
    },
  },
});

function Theme(Component) {
  function Theme(props) {

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );

  }

  return Theme;
}

export default Theme;