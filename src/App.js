import React, { useState, useEffect } from "react";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import { Route, Routes } from "react-router-dom";

function App() {

  const [width, setWindowWidth] = useState(0)
   useEffect(() => { 

     updateDimensions();

     window.addEventListener("resize", updateDimensions);
     return () => 
       window.removeEventListener("resize",updateDimensions);
    }, [])
    const updateDimensions = () => {
      const width = window.innerWidth
      setWindowWidth(width)
    }

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
