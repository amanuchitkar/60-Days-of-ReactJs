import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c="pol";
  render() {
    return (
      <div>
        Hello first class based Component class {this.c}
      </div>
    )
  }
}
