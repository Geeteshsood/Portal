import React from "react";
import MultipleSelect from "./MultipleSelect";
import BasicSelect from "./BasicSelect";
import BasicTextFields from "./BasicTextField";
const Filters = ({
  filteredJobs,
  setFilteredJobs,
  jobs,
  appliedFilters,
  setAppliedFilters,
}) => {
  const names = [
    "Backend",
    "Frontend",
    "Fullstack",
    "TOS",
    "Flutter",
    "React Native",
    "Android",
    "Tech Lead",
    "Dev-Ops",
    "Data Engineer",
    "Data Science",
    "Computer-Vision",
    "NIP",
    "Deep-Learning",
    "Test / QA",
    "Web3",
    "Sre",
    "Data-Infrastructure",
  ];

  const roles = [
    "backend",
    "frontend",
    "Fullstack",
    "iOS",
    "Flutter",
    "React Native",
    "android",
    "tech lead",
    "Dev-Ops",
    "Data Engineer",
    "Data Science",
    "Computer-Vision",
    "NIP",
    "Deep-Learning",
    "Test / QA",
    "Web3",
    "Sre",
    "Data-Infrastructure",
  ];

  const employees = [
    "1-10",
    "11-20",
    "21-50",
    "51-100",
    "101-200",
    "201-500",
    "500+",
  ];

  const remote = ["remote", "hybrid", "In-office"];

  const experience = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const pay = ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"];

  return (
    <div className="flex p-4 justify-center items-center">
      <MultipleSelect
        names={roles}
        lb="Roles"
        filteredJobs={filteredJobs}
        setFilteredJobs={setFilteredJobs}
        jobs={jobs}
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
      />
      <MultipleSelect
        names={employees}
        lb="Number of Employees"
        filteredJobs={filteredJobs}
        setFilteredJobs={setFilteredJobs}
        jobs={jobs}
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
      />
      <BasicSelect
        names={experience}
        lb="Experience"
        filteredJobs={filteredJobs}
        setFilteredJobs={setFilteredJobs}
        jobs={jobs}
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
      />
      <MultipleSelect
        names={remote}
        lb="Remote"
        filteredJobs={filteredJobs}
        setFilteredJobs={setFilteredJobs}
        jobs={jobs}
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
      />
      <BasicSelect
        names={pay}
        lb="Minimum Base Pay Salary"
        filteredJobs={filteredJobs}
        setFilteredJobs={setFilteredJobs}
        jobs={jobs}
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
      />
      <BasicTextFields
        filteredJobs={filteredJobs}
        setFilteredJobs={setFilteredJobs}
        jobs={jobs}
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
      />
    </div>
  );
};

export default Filters;
