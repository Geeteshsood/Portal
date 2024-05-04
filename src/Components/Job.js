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
    <div className="job-card w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 px-4">
      <div className="border-2 border-gray-300 rounded-xl p-4 flex flex-col justify-between h-full bg-white shadow-md">
        <div className="flex items-center mb-4">
          <img className="h-14 w-12 mr-4" src={logoUrl} alt="Company Logo" />
          <div>
            <div className="flex text-lg font-semibold">{companyName}</div>
            <div className="flex text-base text-gray-600">{jobRole}</div>
            <div className="flex text-sm text-gray-500">{location}</div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="text-green-500 mr-0" />
            <p className="text-base ">
              Estimated Salary: ₹{minJdSalary ? minJdSalary : 0} - {maxJdSalary}{" "}
              LPA ✅
            </p>
          </div>
          <div className="flex">
            <p className="font-semibold mb-2">About Company:</p>
          </div>
          <JobDescription jobDetailsFromCompany={jobDetailsFromCompany} />
        </div>
        <div className="flex items-center mb-4">
          <div className="text-blue-500 mr-2" />
          <p>Minimum Experience: {minExp ? minExp : 0} years</p>
        </div>
        <button
          style={{ backgroundColor: "rgb(85, 239, 196)" }}
          className=" font-medium py-2 px-4 rounded-full mb-2 text-black"
        >
          ⚡ Easy Apply
        </button>

        <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-full hover:bg-blue-600">
          Unlock referral asks
        </button>
      </div>
    </div>
  );
};

export default Job;
