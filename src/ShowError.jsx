import React from "react";
import { Link } from "react-router-dom";

const ShowError = () => {
  return (
    <React.Fragment>
      <div className="text-center font-bold text-6xl border-solid border-4 border-indigo-600  hover:border-dotted">
        <h1>404 Error</h1>
        <h1>Page Not Found</h1>
      </div>
      <div>
        <Link to="/">
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Back To Home
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ShowError;
