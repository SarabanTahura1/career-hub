import React from "react";
import { Link } from "react-router-dom";
import locationIcon from "../../assets/Icons/Location Icon.png";
import currencyIcon from "../../assets/Icons/Frame.png";
const SingleFeaturedJobs = ({ featuredJob }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
    job_description,
    ob_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = featuredJob;

  const { phone, email } = contact_information;
  return (
    <div className="bg-slate-50 rounded-md shadow-sm p-6">
      <img src={company_logo} alt="logo" />
      <div className="my-6">
        <h3 className="text-3xl font-bold">{job_title}</h3>
        <span className="text-lg">{company_name}</span>
        <div className="my-2">
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
        <Link to={`job/${id}`} className="btn btn-primary mt-6">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SingleFeaturedJobs;
