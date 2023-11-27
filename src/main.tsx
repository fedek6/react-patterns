import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import SplitPaneDemo from "./routes/layout-components/split-pane/SplitPaneDemo";
import ListDemo from "./routes/layout-components/lists/ListDemo";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <h1>React design patterns</h1>
      },
      {
        path: "/layout-components/split-pane",
        element: <SplitPaneDemo />,
      },
      {
        path: "/layout-components/lists",
        element: <ListDemo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
