import React, { useEffect, useState } from "react";
import currencyIcon from "../../assets/icons/Frame.png";
import jobTitleIcon from "../../assets/icons/Frame-1.png";
import phoneIcon from "../../assets/icons/Frame-2.png";
import emailIcon from "../../assets/icons/Frame-3.png";
import locationIcon from "../../assets/icons/Frame-4.png";
import { useLoaderData, useParams } from "react-router-dom";

const JobView = () => {
  const { jobId } = useParams();
  const jobData = useLoaderData();
  const [displayData, setDisplayData] = useState([]);
  if (jobData) {
    localStorage.setItem("details", JSON.stringify(jobData));
  }
  useEffect(() => {
    const getDataFromStorage = JSON.parse(localStorage.getItem("details"));
    const singleView = getDataFromStorage?.find((job) => job.id == jobId);
    setDisplayData(singleView);
  }, []);
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
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = displayData;

  const addDataToLocalStorage = (
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary
  ) => {
    const previousAppliedData = JSON.parse(
      localStorage.getItem("applied-data")
    );
    const appliedDetailsArr = [];
    const appliedData = {
      id,
      company_logo,
      job_title,
      company_name,
      remote_or_onsite,
      location,
      fulltime_or_parttime,
      salary,
    };

    if (previousAppliedData) {
      const restOfJob = previousAppliedData.find((jobId) => jobId.id == id);

      if (restOfJob) {
        // toast("Sorry! You Have Already Applied This Job.");
      } else {
        appliedDetailsArr.push(...previousAppliedData, appliedData);
        localStorage.setItem("applied-data", JSON.stringify(appliedDetailsArr));
      }
    } else {
      appliedDetailsArr.push(appliedData);
      localStorage.setItem("applied-data", JSON.stringify(appliedDetailsArr));
    }
  };
  return (
    <div className="container mx-auto px-4">
      <h2 className="py-16 text-center text-4xl font-semibold bg-slate-200">
        Job View{" "}
      </h2>
      <div className="block lg:grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
        <div className="col-span-2 mb-6 lg:mb-0">
          <div className="mb-5">
            <span className="font-bold text-lg">Job Description: </span>
            {job_description}
          </div>
          <div className="mb-5">
            <span className="font-bold text-lg">Job Responsibility: </span>
            {job_responsibility}
          </div>
          <div className="mb-5">
            <span className="font-bold text-lg">
              Educational Requirements:{" "}
            </span>
            {educational_requirements}
          </div>
          <div>
            <span className="font-bold text-lg">Experiences: </span>
            {experiences}
          </div>
        </div>
        <div className="w-full h-full shadow-sm">
          <div className="bg-slate-100 ">
            <div className="p-4">
              <h3 className="text-lg font-medium border-b-2 pb-2">
                Job Details
              </h3>
              <div className="flex items-center mt-4">
                <img src={currencyIcon} alt="" />
                <span className="mx-2"> Salary : </span> {salary}
              </div>
              <div className="flex items-center mt-4">
                <img src={jobTitleIcon} alt="" />
                <span className="mx-2"> Job Title : </span> {job_title}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium border-b-2 pb-2">
                Contact Information
              </h3>
              <div className="flex items-center mt-4">
                <img src={phoneIcon} alt="" />
                <span className="mx-2"> phone : </span>{" "}
                {contact_information?.phone}
              </div>
              <div className="flex items-center mt-4">
                <img src={emailIcon} alt="" />
                <span className="mx-2"> Email : </span>{" "}
                {contact_information?.email}
              </div>
              <div className="flex items-center mt-4">
                <img src={locationIcon} alt="" />
                <span className="mx-2"> Location : </span> {location}
              </div>
            </div>
          </div>
          <button
            onClick={() =>
              addDataToLocalStorage(
                id,
                company_logo,
                job_title,
                company_name,
                remote_or_onsite,
                location,
                fulltime_or_parttime,
                salary
              )
            }
            className="btn btn-primary w-full"
          >
            Apply Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobView;
