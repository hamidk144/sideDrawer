import React, { useState } from "react";
import Backdrop from "./Backdrop";
import "./leftDrawer.css";

const LeftDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };
  return (
    <div>
      <button onClick={handleDrawer} className="drawer-btn">
        <img src={require("../../menuIcon.png")} alt="icon" />
      </button>


      {isDrawerOpen && <Backdrop setIsDrawerOpen={setIsDrawerOpen} />}

      <div className={isDrawerOpen ? "clt-left-drawer open" : "clt-left-drawer"}>
        <div className="clt-left-drawer-wrapper">

          <ul>
            <li>Home</li>
          </ul>
          <hr />

          <ul>
            <h4>Events</h4>
            <li>Wedding</li>
            <li>professional</li>
            <li>Birthday</li>
            <li>Religious</li>
          </ul>
          <hr />

          <ul>
            <h4>Espace utilisateur</h4>
            <li>Account</li>
            <li>Booking</li>
            <li>Payment method</li>
          </ul>
          <hr />

          <ul>
            <h4>help</h4>
            <li>Help Center</li>
          </ul>
          </div>
      </div>
    </div>
  );
};

export default LeftDrawer;
