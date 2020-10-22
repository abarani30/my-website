import React from "react";

export default function Describtion({ theme }) {
  return (
    <p
      className="Description"
      style={{ color: theme === "light" ? "#222" : "#FFF" }}
    >
      My name is ali sattar, iam 29 years old. I'm a backend web developer. I
      know <b>HTML, CSS, JavaScript, React, Python and Django</b>.
    </p>
  );
}
