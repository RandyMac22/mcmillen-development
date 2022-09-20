import React, { useState, useEffect } from "react";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import LandingPage from "./Components/LandingPage";
import UniEvent from "./Components/UniEvent";
import KingUniWiki from "./Components/KingUniWiki";
import Atlas from "./Components/Atlas";
import AmazonClone from "./Components/AmazonClone";
import BaseballCardCollection from "./Components/BaseballCard";
import Login from "./Components/Login";
import Messages from "./Components/Messages";
import PrivateRoute from "./Components/PrivateRoute";
import { Route, Routes } from "react-router-dom";

function App(props) {

  const loggedIn = props.loggedin;

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
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/landing-page" element={<LandingPage />} />
        <Route path="/projects/unievent" element={<UniEvent />}  />
        <Route path="/projects/kingWiki" element={<KingUniWiki />} />
        <Route path="/projects/atlas" element={<Atlas />} />
        <Route path="/projects/amazonClone" element={<AmazonClone />} />
        <Route path="/projects/baseballCards" element={<BaseballCardCollection />}
        <Route path="/login" element={<Login updateLogin={props.updateLogin} />} />
        <Route
          path="/admin/messages" element={
            <PrivateRoute
              isAuth={loggedIn}
              path="messages"
            >
              <Messages updateLogin={props.updateLogin} />
            </PrivateRoute>
          }
        />
            
        
      </Routes>
    </div>
  );
}

export default App;
