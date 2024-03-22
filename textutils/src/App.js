// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./Componets/navbar";
import Textarea from "./Componets/textForm";
import About from "./Componets/about";
import Alert from "./Componets/Alert";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// let name = "aman";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1a1d1f";
      showAlert("Drak mode Enable succesfully", "success");
      document.title = "TextUtils-DarkMode";
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enable succesfully", "success");
      document.title = "TextUtils-LightMode";
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          togglemode={toggleMode}
        />
        <Alert alert={alert} />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Textarea heading="Welcome" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
