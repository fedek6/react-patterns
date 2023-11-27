import { Layout } from "../components/layout";
import { Menu } from "../components/menu";
import { MENU } from "../config";

export default function Root() {
  return (
    <>
      <Layout>
        <Menu elements={MENU} />
        <h1>React patterns</h1>
      </Layout>
    </>
  );
}
