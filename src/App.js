import React from "react";

import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";

function App(props) {
  const loggedIn = props.loggedin;
  const loggedOut = !props.loggedin;

  return (
    <div className="App Container">
      <Routes>
        <Route path="/" exact element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
