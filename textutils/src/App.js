// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./Componets/navbar";
import Textarea from "./Componets/textForm";
// import About from "./Componets/about";
import Alert from './Componets/Alert'

// let name = "aman";
function App() {
  const [mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

  }
  const toggleMode=()=>{
    if (mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor="#1a1d1f"
    showAlert("Drak mode Enable succesfully","success")
  }
  else if(mode==="dark"){
    setMode("light")
    document.body.style.backgroundColor="white"
    showAlert("Light mode Enable succesfully","success")
    }
    else{
      console.log("error")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} togglemode={toggleMode}/>
      <Alert alert={alert}/>
      <Textarea heading="Welcome" mode={mode} showAlert={showAlert}/>
      {/* <About /> */}
    </>
  );
}

export default App;
