import React from "react";
import { MdDateRange } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BiGitRepoForked } from "react-icons/bi";

export default function ExtraInfoIcons({ bcolor, colour, classname }) {
  return (
    <div
      className="ExtraInfo"
      style={{
        backgroundColor: bcolor,
        color: colour,
      }}
    >
      <div>
        <MdDateRange className={classname} /> 28/01/1991
      </div>
      <div>
        <GoLocation className={classname} /> Iraq, Baghdad
      </div>
      <div>
        <BiGitRepoForked className={classname} />
        <a href="https://github.com/asattar30" style={{ color: colour }}>
          asattar30
        </a>
      </div>
    </div>
  );
}
