import { SplitPane } from "./SplitPane";
import { DemoContainer } from "../../components/DemoContainer";

export default function SplitPaneDemo() {
  return (
    <DemoContainer>
      <SplitPane>
        <div>Pane 1</div>
        <div>Pane 2</div>
      </SplitPane>
    </DemoContainer>
  );
}
