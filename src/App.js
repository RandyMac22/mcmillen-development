import React from "react";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App Container">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </div>
  );
}

export default App;
