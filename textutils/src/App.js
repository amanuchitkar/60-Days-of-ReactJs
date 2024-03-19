// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./Componets/navbar";
import Textarea from "./Componets/textForm";
// import About from "./Componets/about";

// let name = "aman";
function App() {
  const [mode,setMode]=useState("light");
  const toggleMode=()=>{
    if (mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor="#1a1d1f"
  }
  else if(mode==="dark"){
    setMode("light")
    document.body.style.backgroundColor="white"
    }
    else{
      console.log("error")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} togglemode={toggleMode}/>
      {/* <Navbar/> */}
      <Textarea heading="Welcome" mode={mode}/>
      {/* <About /> */}
    </>
  );
}

export default App;
