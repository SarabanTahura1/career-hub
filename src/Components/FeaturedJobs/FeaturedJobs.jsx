import React, { useEffect, useState } from "react";
import SingleFeaturedJobs from "./SingleFeaturedJobs";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState();
  let [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch("./FeaturedJobs.json")
      .then((res) => res.json())
      .then((data) => {
        if (showMore) {
          setFeaturedJobs(data);
        } else setFeaturedJobs(data.slice(0, 4));
      });
  }, [featuredJobs]);
  return (
    <div className="container mx-auto py-10 my-10">
      <div className="text-center ">
        <h2 className="text-center mb-4 text-4xl font-bold">Featured Jobs</h2>
        <span className="inline-block w-auto mx-auto">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </span>
      </div>
      <div className="my-8 py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredJobs?.map((featuredJob) => (
          <SingleFeaturedJobs
            key={featuredJob.id}
            featuredJob={featuredJob}
          ></SingleFeaturedJobs>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className={`btn btn-primary ${showMore && "hidden"}`}
        >
          See More Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
