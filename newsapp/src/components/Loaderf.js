import React, { Component } from 'react'
import Loaderx from './loader.gif';

export default class Loader extends Component {
  render() {
    return (
      <div>
        <img style={{width:"5rem",height:"5rem", display:"block", margin:"auto"}} src={Loaderx} alt="loading"/>
      </div>
    )
  }
}
