import React from "react";
import Banner from "./Banner";
import JobCategory from "./JobCategory.jsx/JobCategory";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner />
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
