import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import About from "./componets/About";
import NoteState from "./context/NoteState";

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
        </Routes>
        <Routes>
          <Route path="/about" exact element={<About/>}></Route>
        </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
