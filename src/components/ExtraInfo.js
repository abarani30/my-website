import React from "react";
import ExtraInfoIcons from "./ExtraInfoIcons";

export default function ExtraInfo({ theme }) {
  return theme === "light" ? (
    <ExtraInfoIcons bcolor="#e5e7e9" colour="black" classname="DateIconLight" />
  ) : (
    <ExtraInfoIcons bcolor="#666" colour="#FFF" classname="DateIconDark" />
  );
}
