import React, { useEffect, useState } from "react";
import SingleCategory from "./SingleCategory";

const JobCategory = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    fetch("./JobCategory.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="container mx-auto py-10 my-10">
      <div className="text-center ">
        <h2 className="text-center mb-4 text-4xl font-bold">
          Job Category List
        </h2>
        <span className="inline-block w-auto mx-auto">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </span>
      </div>
      <div className="my-16 py-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories?.map((category) => (
          <SingleCategory
            key={category.id}
            category={category}
          ></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
