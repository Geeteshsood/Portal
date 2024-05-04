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
