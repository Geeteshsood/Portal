import React, { useState } from "react";
import BasicModal from "./BasicModal";

const JobDescription = ({ jobDetailsFromCompany }) => {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(true);
  };

  return (
    <div>
      <div className="text-left">
        <span className="text-base text-left">
          {jobDetailsFromCompany.slice(0, 120)}
        </span>
        <span className="text-base text-left opacity-50">
          {jobDetailsFromCompany.slice(121, 200)}
        </span>
        <span className="text-base text-left opacity-20">
          {jobDetailsFromCompany.slice(201, 300)}
        </span>
      </div>
      <BasicModal jobDetailsFromCompany={jobDetailsFromCompany} />
    </div>
  );
};

export default JobDescription;
