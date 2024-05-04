import React, { useEffect, useState } from "react";
import Job from "./Job";
import Filters from "./Filters";

const Body = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState({});

  console.log(appliedFilters);

  const fetchData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setJobs(result.jdList);
        setFilteredJobs(result.jdList);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filterJobs = jobs.filter((job) => {
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

      for (let category in appliedFilters) {
        const arr = appliedFilters[category];

        if (
          category === "Remote" && location === "remote"
            ? !arr.includes("remote")
            : arr.includes("remote")
        ) {
          return false;
        } else if (category === "Roles" && !arr.includes(jobRole)) {
          return false;
        } else if (category === "Experience" && +arr[0] > minExp) {
          return false;
        } else if (
          category === "Minimum Base Pay Salary" &&
          +arr.slice(0, -1) > maxJdSalary
        ) {
          return false;
        } else if (
          category === "Search Company Name" &&
          !companyName.toLowerCase().includes(arr.toLowerCase())
        ) {
          return false;
        }
      }

      return true; // Include the job if it passes all filter criteria
    });

    setFilteredJobs(filterJobs);
  }, [appliedFilters]);

  return (
    <div className="h-screen w-screen ">
      <div className="w-screen">
        <Filters
          jobs={jobs}
          filteredJobs={filteredJobs}
          setFilteredJobs={setFilteredJobs}
          appliedFilters={appliedFilters}
          setAppliedFilters={setAppliedFilters}
        />
      </div>
      <div className="flex flex-wrap">
        {filteredJobs.map((job, index) => (
          <Job job={job} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
