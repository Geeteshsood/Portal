import React, { useEffect, useState } from "react";
import Job from "./Job";
import Filters from "./Filters";

const Body = () => {
  const [jobs, setJobs] = useState([]);

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
      .then((result) => setJobs(result.jdList))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(jobs);

  return (
    <div>
      <div>
        <Filters />
      </div>
      <div className="h-screen w-screen flex flex-wrap">
        {jobs.map((job, index) => (
          <Job job={job} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
