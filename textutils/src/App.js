// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Componets/navbar";
import Textarea from './Componets/textForm'
import About from "./Componets/about";

// let name = "aman";
function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils"/>
    {/* <Navbar/> */}
    <Textarea heading="Welcome"/>
    <About/>
    </>
  );
}

export default App;
