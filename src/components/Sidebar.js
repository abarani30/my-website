import React, { useContext } from "react";
import { myContext } from "../ContextAPI";
import BasicInfo from "./BasicInfo";
import ExtraInfo from "./ExtraInfo";

export default function Sidebar() {
  const { theme, changeSection } = useContext(myContext);
  return (
    <div
      className="Sidebar"
      style={{ backgroundColor: theme === "light" ? "white" : "#333" }}
    >
      <BasicInfo theme={theme} />
      <ExtraInfo theme={theme} />
      <button onClick={() => changeSection("contact-me")} className="EmailBtn">
        Email Me
      </button>
    </div>
  );
}
