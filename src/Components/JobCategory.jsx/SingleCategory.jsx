import React from "react";

const SingleCategory = ({ category }) => {
  const { logo, name, jobs_available } = category;
  return (
    <div className="bg-slate-50 p-6">
      <img src={logo} className="bg-slate-100 p-6" alt="" />
      <div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <span>{jobs_available}</span>
      </div>
    </div>
  );
};

export default SingleCategory;
