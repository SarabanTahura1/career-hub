import React from "react";
import { Link } from "react-router-dom";
import locationIcon from "../../src/assets/Icons/Location Icon.png";
import currencyIcon from "../../src/assets/Icons/Frame.png";

const SingleAppliedJobs = ({ job }) => {
  console.log("Single Job", job);
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
  } = job;
  return (
    <div className="border-2 rounded-sm w-full h-fit p-4 flex items-center gap-4">
      <img src={company_logo} className="bg-indigo-50 h-40 w-52 p-4" alt="" />
      <div className="flex justify-between items-center w-full">
        <div>
          <h2>{job_title}</h2>
          <h2>{company_name}</h2>
          <div className="my-2 flex items-center">
            <span className="mr-6 px-4 py-2  rounded-md border-2 border-indigo-300 inline-block ">
              {remote_or_onsite}
            </span>
            <span className=" px-4 py-2 border-2 rounded-md  border-indigo-300 inline-block ">
              {fulltime_or_parttime}
            </span>
          </div>
          <div className="flex gap-4 items-center my-2">
            <div className="flex items-center">
              <img src={locationIcon} alt="" />
              <span>{location}</span>
            </div>
            <div className="flex items-center">
              <img src={currencyIcon} alt="" />
              <span>{salary}</span>
            </div>
          </div>
        </div>
        <Link to={`job/${id}`} className="btn btn-primary mt-6">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SingleAppliedJobs;
