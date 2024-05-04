import React from "react";
import JobDescription from "./JobDescription";

const Job = ({ job }) => {
  const {
    companyName,
    jobDetailsFromCompany,
    jobRole,
    location,
    logoUrl,
    minJdSalary,
    maxJdSalary,
    minExp,
  } = job;

  return (
    <div className="w-1/4 border-2 border-gray-300 rounded-3xl flex flex-col space-y-1 m-10 p-4 shadow-md">
      <div className="flex p-4">
        <img className="h-12 mr-1" src={logoUrl} alt="Company Logo" />
        <div className="flex flex-col">
          <p className="text-xl font-bold">{companyName}</p>
          <p className="text-lg font-semibold">{jobRole}</p>
          <p className="text-base">{location}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-base font-semibold mb-3">
          Estimated Salary: ₹{minJdSalary ? minJdSalary : 0} -{maxJdSalary} LPA
          <span className=""> ✅</span>
        </p>
        <p className="font-semibold mb-2">About Company:</p>
        <JobDescription jobDetailsFromCompany={jobDetailsFromCompany} />
      </div>

      <div className="info-container">
        <h3 style={{ marginTop: "10px" }}>Minimum Experience</h3>
        <h2>{minExp ? minExp : 0} years</h2>
      </div>
      <button className="w-full bg-green-400 text-black font-medium py-2 px-4">
        ⚡ Easy Apply
      </button>
      <button className="w-full bg-blue-400 text-black font-medium py-2 px-4">
        Unlock referral asks
      </button>
    </div>
  );
};

export default Job;
