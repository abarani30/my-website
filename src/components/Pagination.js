import React from "react";

export default function Pagination({
  projectsPerPage,
  totalProjects,
  paginate,
  theme,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="Pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              href="/"
              style={{ color: theme === "light" ? "black" : "white" }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
