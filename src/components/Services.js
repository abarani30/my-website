import React from "react";
import ServiceCards from "./ServiceCards";

export default function Services({ theme }) {
  return theme === "light" ? (
    <ServiceCards
      bcolor="#eee"
      colour="#222"
      iconColor="#f15f79"
      classname="ServiceCardLight"
    />
  ) : (
    <ServiceCards
      bcolor="#555"
      colour="white"
      iconColor="burlywood"
      classname="ServiceCardDark"
    />
  );
}
