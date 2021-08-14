import { MuiThemeProvider } from 'material-ui/styles';
import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar.js';
import Search from './components/search/Search.js';

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App

//22551781-c588a7e12b0c22b3457291643