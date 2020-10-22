import React, { useContext } from "react";
import { myContext } from "../ContextAPI";

export default function MobileNavbar() {
  const { changeSection } = useContext(myContext);

  return (
    <div className="MobileNavbar">
      <div className="MobileNavItems">
        <h5
          onClick={() => changeSection("services")}
          style={{
            paddingRight: "12px",
          }}
        >
          Services
        </h5>
        <h5
          onClick={() => changeSection("portfolio")}
          style={{
            paddingRight: "12px",
          }}
        >
          Portfolio
        </h5>
        <h5 onClick={() => changeSection("resume")}>Resume</h5>
      </div>
    </div>
  );
}
