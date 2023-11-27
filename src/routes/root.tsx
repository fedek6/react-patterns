import { Outlet } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Menu } from "../components/Menu";
import { MENU } from "../config";

export default function Root() {
  return (
    <>
      <Layout>
        <Menu elements={MENU} />
        <Outlet />
      </Layout>
    </>
  );
}
