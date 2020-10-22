import React, { useState } from "react";
import Projects from "../Data";
import Pagination from "./Pagination";

export default function Portfolio({ theme }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(4);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = Projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="Portfolio">
        <h4 style={{ color: theme === "light" ? "black" : "white" }}>
          My Portfolio
        </h4>

        <br></br>
        {currentProjects.map((imgItem) => (
          <a href={imgItem.link} key={imgItem.id}>
            <img src={imgItem.imgUrl} alt={imgItem.alternative} />
          </a>
        ))}
      </div>
      <Pagination
        totalProjects={Projects.length}
        projectsPerPage={projectsPerPage}
        paginate={paginate}
        theme={theme}
      />
    </div>
  );
}
