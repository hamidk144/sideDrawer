import React, { useState } from "react";
import Backdrop from "./Backdrop";
import "./leftDrawer.css";

const LeftDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const drawerLinks1 = ["Home"];
  const drawerLinks2 = ["Events","Wedding","Professional","Birthday","Religious",];
  const drawerLinks3 = ["Account", "Booking", "Payment method"];
  const drawerLinks4 = ["Help Center"];

  return (
    <div>
      <button onClick={handleDrawer} className="drawer-btn">
        <img src={require("../../menuIcon.png")} alt="icon" />
      </button>

      {isDrawerOpen && <Backdrop setIsDrawerOpen={setIsDrawerOpen} />}

      <div className={isDrawerOpen?"clt-left-drawer open" : "clt-left-drawer"}>
        <div className="clt-left-drawer-wrapper">

          <ul>
            {drawerLinks1.map((link) => (
              <li
                className={selected == link && "link-active"}
                onClick={() => setSelected(link)}
              >
                {link}
              </li>
            ))}
          </ul>
          <hr />

          <ul>
            <h4>Events</h4>
            {drawerLinks2.map((link) => (
              <li
                className={selected == link && "link-active"}
                onClick={() => setSelected(link)}
              >
                {link}
              </li>
            ))}
          </ul>
          <hr />

          <ul>
            {drawerLinks3.map((link) => (
              <li
                className={selected == link && "link-active"}
                onClick={() => setSelected(link)}
              >
                {link}
              </li>
            ))}
          </ul>
          <hr />

          <ul>
            <h4>Help</h4>
            {drawerLinks4.map((link) => (
              <li
                className={selected == link && "link-active"}
                onClick={() => setSelected(link)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftDrawer;
