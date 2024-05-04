import React, { useState } from "react";
import BasicModal from "./BasicModal";

const JobDescription = ({ jobDetailsFromCompany }) => {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(true);
  };

  return (
    <div className="p-4 border rounded bg-gray-50">
      <p className="text-base">{jobDetailsFromCompany.slice(0, 180)}</p>
      <BasicModal jobDetailsFromCompany={jobDetailsFromCompany} />
    </div>
  );
};

export default JobDescription;
