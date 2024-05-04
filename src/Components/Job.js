import React from "react";

const Job = ({ job }) => {
  const {
    companyName,
    jobDetailsFromCompany,
    jobRole,
    location,
    logoUrl,
    maxExp,
    minJdSalary,
    maxJdSalary,
    minExp,
    salaryCurrencyCode,
  } = job;

  return (
    <div className="w-1/4 border-2 border-gray-300 rounded-3xl flex flex-col space-y-2 m-10 p-4 shadow-md">
      <div className="flex p-4">
        <img className="h-14 mr-4" src={logoUrl} alt="Company Logo" />
        <div className="flex flex-col">
          <p className="text-lg font-bold">{companyName}</p>
          <p className="text-2xl font-semibold">{jobRole}</p>
          <p className="text-xl">{location}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold mb-4">
          Estimated Salary: ₹{minJdSalary ? minJdSalary : 0} -{maxJdSalary} LPA
          <span className=""> ✅</span>
        </p>
        <p className="font-semibold">About Company:</p>
        <p className="mb-2">About us</p>
        <p className="overflow-scroll h-40">{jobDetailsFromCompany}</p>
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
