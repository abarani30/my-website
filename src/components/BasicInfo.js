import React from "react";
import SocialIcons from "./SocialIcons";

export default function BasicInfo({ theme }) {
  return (
    <center>
      <img src={"images/alisattar.jpg"} alt="MyPhoto" className="My-Photo" />
      <h4
        className="Name"
        style={{ color: theme === "light" ? "black" : "white" }}
      >
        Ali Sattar
      </h4>
      <h4 className="Position">Software Developer</h4>
      {theme === "light" ? (
        <SocialIcons classname="SocialIconLight" />
      ) : (
        <SocialIcons classname="SocialIconDark" />
      )}
    </center>
  );
}
