// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./Componets/navbar";
import Textarea from "./Componets/textForm";
// import About from "./Componets/about";

// let name = "aman";
function App() {
  const [mode,setMode]=useState("light");
  const [color,setcolor]=useState("backgroundColor=white");
  const toggleMode=()=>{
    if (mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor="#1a1d1f"
    setcolor("backgroundColor=white")
  }
  else if(mode==="dark"){
    setMode("light")
    document.body.style.backgroundColor="white"
    setcolor("backgroundColor=black")
    }
    else{
      console.log("error")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} togglemode={toggleMode} colors={color}/>
      {/* <Navbar/> */}
      <Textarea heading="Welcome" />
      {/* <About /> */}
    </>
  );
}

export default App;
