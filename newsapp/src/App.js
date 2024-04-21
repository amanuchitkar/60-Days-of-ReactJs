import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  
  state = {
    progress: 0,
  };
  setProgress=(progress)=> {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <>
        <Router>
          
          <div>
            <Navbar />
            <LoadingBar color="#f11946" progress={this.state.progress} />
            <Routes>
              <Route
                exact
                path="/"
                element={<News setProgress={this.setProgress} key="general" category="general" />}
              />
              <Route
                exact
                path="/general"
                element={<News setProgress={this.setProgress} key="general" category="general" />}
              />
              <Route
                exact
                path="/business"
                element={<News setProgress={this.setProgress} key="business" category="business" />}
              />
              <Route
                exact
                path="/entertainment"
                element={<News setProgress={this.setProgress} key="entertainment" category="entertainment" />}
              />
              <Route
                exact
                path="/health"
                element={<News setProgress={this.setProgress} key="health" category="health" />}
              />
              <Route
                exact
                path="/science"
                element={<News setProgress={this.setProgress} key="science" category="science" />}
              />
              <Route
                exact
                path="/sports"
                element={<News setProgress={this.setProgress} key="sports" category="sports" />}
              />
              <Route
                exact
                path="/technology"
                element={<News setProgress={this.setProgress} key="technology" category="technology" />}
              />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
