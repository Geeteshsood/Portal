import React from "react";
import MultipleSelect from "./MultipleSelect";
import BasicSelect from "./BasicSelect";
import BasicTextFields from "./BasicTextField";
const Filters = () => {
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

  const employees = [
    "1-10",
    "11-20",
    "21-50",
    "51-100",
    "101-200",
    "201-500",
    "500+",
  ];

  const remote = ["Remote", "Hybrid", "In-office"];

  const experience = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const pay = ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"];

  return (
    <div className="flex p-4 justify-center items-center">
      <MultipleSelect names={roles} lb="Roles" />
      <MultipleSelect names={employees} lb="Number of Employees" />
      <BasicSelect names={experience} lb="Experience" />
      <MultipleSelect names={remote} lb="Remote" />
      <BasicSelect names={pay} lb="Minimum Base Pay Salary" />
      <BasicTextFields />
    </div>
  );
};

export default Filters;
