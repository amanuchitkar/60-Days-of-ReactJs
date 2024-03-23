// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./Componets/navbar";
import Textarea from "./Componets/textForm";
import About from "./Componets/about";
import Alert from "./Componets/Alert";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          togglemode={toggleMode}
        />
        <Alert alert={alert} />
        
        

        <BrowserRouter>
      <Routes>
        <Route index element={<Textarea mode={mode}/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
