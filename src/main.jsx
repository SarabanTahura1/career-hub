import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import Statistics from "./Components/Statistics";
import ShowError from "./ShowError";
import AppliedJobs from "./Components/AppliedJobs";
import JobView from "./Components/JobView.jsx/JobView";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ShowError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "job/:jobId",
        element: <JobView></JobView>,
        loader: () => fetch("./FeaturedJobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
