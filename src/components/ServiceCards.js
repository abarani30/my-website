import React from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { SiMaterialdesignicons, SiAirplayvideo } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";

export default function ServiceCards({ bcolor, colour, iconColor, classname }) {
  return (
    <div>
      <div className="Services" style={{ backgroundColor: bcolor }}>
        <h4 style={{ color: colour }}>What I'm Doing?</h4>
        <br></br>
        <div className={classname}>
          <SiMaterialdesignicons
            className="ServiceIcon"
            style={{ color: iconColor }}
          />
          <h5 style={{ color: colour }}>Web Design</h5>
        </div>
        <div className={classname}>
          <MdDeveloperMode
            className="ServiceIcon"
            style={{ color: iconColor }}
          />
          <h5 style={{ color: colour }}>Web Development</h5>
        </div>
        <div className={classname}>
          <FaProjectDiagram
            className="ServiceIcon"
            style={{ color: iconColor }}
          />
          <h5 style={{ color: colour }}>Graduation Projects</h5>
        </div>
        <div className={classname}>
          <SiAirplayvideo
            className="ServiceIcon"
            style={{ color: iconColor }}
          />
          <h5 style={{ color: colour }}>Paid Courses</h5>
        </div>
      </div>
    </div>
  );
}
