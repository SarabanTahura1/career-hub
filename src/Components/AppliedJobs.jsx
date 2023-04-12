import React, { useState, useEffect } from "react";
import SingleAppliedJobs from "./SingleAppliedJobs";

const AppliedJobs = () => {
  const [appliedDatas, setAppliedDatas] = useState([]);

  useEffect(() => {
    let previousAppliedData = JSON.parse(localStorage.getItem("applied-data"));
    setAppliedDatas(previousAppliedData);
  }, []);

  //   filter function added here
  const handleOnChange = (e) => {
    e.target.value;
    let previousJobData = JSON.parse(localStorage.getItem("applied-data"));

    if (e.target.value == "Remote" || e.target.value == "Onsite") {
      const selectedItem = previousJobData.filter(
        (job) =>
          job.remote_or_onsite == e.target.value ||
          job.fulltime_or_parttime == e.target.value
      );
      setAppliedDatas(selectedItem);
    }
  };
  return (
    <div className="container mx-auto">
      <h2 className="py-16 text-center text-4xl font-semibold bg-slate-200">
        Applied Jobs
      </h2>
      <div className="my-4 text-right">
        <select
          onChange={handleOnChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Filter By
          </option>
          <option>Remote</option>
          <option>Onsite</option>
        </select>
      </div>
      <div className="mb-10  px-4 lg:px-0 grid gap-2">
        {appliedDatas?.map((job) => (
          <SingleAppliedJobs key={job.id} job={job}></SingleAppliedJobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
