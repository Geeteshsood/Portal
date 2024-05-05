import React from "react";
import MultipleSelect from "./MultipleSelect";
import BasicSelect from "./BasicSelect";
import BasicTextFields from "./BasicTextField";
const Filters = ({ appliedFilters, setAppliedFilters }) => {
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

  const filterMulti = [roles, employees, remote];
  const labelMulti = ["Roles", "Number of Employees", "Remote"];

  const filterBasic = [experience, pay];
  const labelBasic = ["Experience", "Minimum Base Pay Salary"];

  return (
    <div className="flex p-4 justify-center items-center">
      {filterMulti.map((filter, index) => (
        <MultipleSelect
          key={index}
          names={filter}
          lb={labelMulti[index]}
          appliedFilters={appliedFilters}
          setAppliedFilters={setAppliedFilters}
        />
      ))}

      {filterBasic.map((filter, index) => (
        <BasicSelect
          key={index}
          names={filter}
          lb={labelBasic[index]}
          appliedFilters={appliedFilters}
          setAppliedFilters={setAppliedFilters}
        />
      ))}

      <BasicTextFields
        lb="Search Company Name"
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
      />
    </div>
  );
};

export default Filters;
