import React, { useContext } from "react";
import { myContext } from "../ContextAPI";
import Describtion from "./Describtion";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Top from "./Top";
import MobileNavbar from "./MobileNavbar";
import Resume from "./Resume";
import ContactMe from "./ContactMe";

export default function MainContent() {
  const { theme, section, showNavbar } = useContext(myContext);

  return (
    <div
      className="MainContent"
      style={{ backgroundColor: theme === "light" ? "white" : "#333" }}
    >
      <Top theme={theme} />
      <Describtion theme={theme} />
      {showNavbar ? <MobileNavbar /> : ""}
      {section === "services" && <Services theme={theme} />}
      {section === "portfolio" && <Portfolio theme={theme} />}
      {section === "resume" && <Resume theme={theme} />}
      {section === "contact-me" && <ContactMe theme={theme} />}
    </div>
  );
}
