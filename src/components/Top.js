import React, { useContext } from "react";
import { myContext } from "../ContextAPI";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import Navbar from "./Navbar";

export default function Top() {
  const {
    toggleDarkTheme,
    toggleLightTheme,
    theme,
    toggleNavbar,
    showNavbar,
  } = useContext(myContext);

  return (
    <div className="Top">
      <h4
        className="About-Me"
        style={{ color: theme === "light" ? "black" : "white" }}
      >
        About Me:
      </h4>
      {showNavbar ? <Navbar /> : ""}
      <div>
        {theme === "light" ? (
          <div>
            <FaMoon className="Dark-Icon" onClick={toggleDarkTheme} />
            <AiOutlineMenu className="Menu-Icon-Light" onClick={toggleNavbar} />
          </div>
        ) : (
          <div>
            <FiSun className="Light-Icon" onClick={toggleLightTheme} />
            <AiOutlineMenu className="Menu-Icon-Dark" onClick={toggleNavbar} />
          </div>
        )}
      </div>
    </div>
  );
}
