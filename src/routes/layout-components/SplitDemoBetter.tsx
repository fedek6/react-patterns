import { DemoContainer } from "../../components/DemoContainer";
import { SplitPaneBetter } from "./SplitPaneBetter";
import { LoremIpsum } from "../../components/LoremIpsum";
import { CurrentMood } from "./SplitPaneDemoBad";

const SplitPaneDemoBad = () => {
  return (
    <DemoContainer>
      <SplitPaneBetter
        left={() => <CurrentMood mood="😀" />}
        right={() => <LoremIpsum />}
      />
    </DemoContainer>
  );
};

export default SplitPaneDemoBad;
