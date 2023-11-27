import { SplitPane } from "./SplitPane";
import { DemoContainer } from "../../components/DemoContainer";
import { CurrentMood } from "../../components/CurrentMood";
import { LoremIpsum } from "../../components/LoremIpsum";

export default function SplitPaneDemo() {
  return (
    <DemoContainer>
      <SplitPane>
        <CurrentMood mood="😀" />
        <LoremIpsum />
      </SplitPane>
    </DemoContainer>
  );
}
