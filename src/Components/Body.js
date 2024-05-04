import React, { useEffect, useState } from "react";
import Job from "./Job";
import Filters from "./Filters";

const Body = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState({});
  const [page, setPage] = useState(1);

  const fetchData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: `${10 * page}`,
      offset: `${10 * (page - 1)}`,
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
        setJobs([...jobs, ...result.jdList]);
        setFilteredJobs([...jobs, ...result.jdList]);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
  }, []);

  useEffect(() => {
    const filterJobs = jobs.filter((job) => {
      const { companyName, jobRole, location, maxJdSalary, minExp } = job;

      for (let category in appliedFilters) {
        const arr = appliedFilters[category];

        switch (category) {
          case "Remote":
            if (
              location === "remote"
                ? !arr.includes("remote")
                : arr.includes("remote")
            ) {
              return false;
            }
            break;
          case "Roles":
            if (!arr.includes(jobRole)) {
              return false;
            }
            break;
          case "Experience":
            if (+arr[0] > minExp) {
              return false;
            }
            break;
          case "Minimum Base Pay Salary":
            if (+arr.slice(0, -1) > maxJdSalary) {
              return false;
            }
            break;
          case "Search Company Name":
            if (!companyName.toLowerCase().includes(arr.toLowerCase())) {
              return false;
            }
            break;
          default:
            break;
        }
      }

      return true;
    });

    setFilteredJobs(filterJobs);
  }, [appliedFilters, jobs]);

  return (
    <div className="h-screen w-screen ">
      <div className="w-screen">
        <Filters
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
