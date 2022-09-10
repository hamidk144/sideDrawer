import logo from "./logo.svg";
import "./App.css";
import LeftDrawer from "./components/leftMenu/LeftDrawer";
import { useState } from "react";

function App() {
 
  return (
    <div className="App">
      <LeftDrawer/>
      <div className="home-content">
        <img src={require("./uc.png")} alt="" className="home-img" />
      </div>
    </div>
  );
}

export default App;
