import React from "react";

export default function Resume({ theme }) {
  const Skills = [
    { language: "HTML", classname: "skills html", percentage: "90%" },
    { language: "CSS", classname: "skills css", percentage: "90%" },
    { language: "JavaScript", classname: "skills js", percentage: "80%" },
    { language: "React.js", classname: "skills react", percentage: "80%" },
    { language: "Python", classname: "skills python", percentage: "85%" },
    { language: "Django", classname: "skills django", percentage: "85%" },
  ];
  return (
    <div
      className="Resume"
      style={{ color: theme === "light" ? "black" : "white" }}
    >
      <h4 style={{ color: theme === "light" ? "black" : "white" }}>
        My Skills:
      </h4>
      <br />
      {Skills.map((item) => (
        <div key={item.language}>
          {item.language}
          <div class="container">
            <div class={item.classname}>{item.percentage}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
