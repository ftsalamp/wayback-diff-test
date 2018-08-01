import React, { Component } from 'react';
import './App.css';
import {DiffContainer} from 'wayback-diff';

class App extends Component {
  render() {
    return (
        <DiffContainer fetchCallback = {null}/>
    );
  }
}

export default App;
