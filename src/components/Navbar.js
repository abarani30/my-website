import React, { useContext } from "react";
import { myContext } from "../ContextAPI";

export default function Navbar() {
  const { changeSection } = useContext(myContext);

  return (
    <div className="Navbar">
      <div className="NavItems">
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
