import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { HomeCard } from "./";

@inject("app")
@observer
export default class HomePage extends Component {

  render() {
    let { app } = this.props;

    return(
      <div style={ { padding: 32, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' } }>
        <HomeCard headline={ "Hello World" } body={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " } />
        <HomeCard headline={ "Hello World" } body={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " } />
      </div>
    )

  }

}