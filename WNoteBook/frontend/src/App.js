import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import About from "./componets/About";
import NoteState from "./context/NoteState";
import Alert from "./componets/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="alert" type="danger"/>
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
            </Routes>
            <Routes>
              <Route path="/about" exact element={<About />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
