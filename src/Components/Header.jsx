import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/appliedJobs"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Applied Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="inline-flex items-center">
            <span className="ml-2 text-xl font-bold tracking-wide text-pink-400">
              Dream Job Hub
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appliedJobs"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Star Applying
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
