import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { Layout } from "./components/Layout";
import { Menu } from "./components/Menu";
import { MENU } from "./config";
import SplitPaneDemo from "./routes/layout-components/SplitPaneDemo";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/layout-components/SplitPane.tsx",
    element: <SplitPaneDemo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <Menu elements={MENU} />
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
