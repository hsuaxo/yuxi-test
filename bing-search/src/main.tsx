import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.scss";

const HomePage = React.lazy(() => import("./pages/Home"));
const SearchPage = React.lazy(() => import("./pages/Search"));

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense>
        <HomePage />
      </React.Suspense>
    ),
  },
  {
    path: "/search",
    element: (
      <React.Suspense>
        <SearchPage />
      </React.Suspense>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
