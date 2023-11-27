import { DemoContainer } from "../../components/DemoContainer";
import { Paragraph } from "../../components/Paragraph";
import { LoremIpsum } from "../../components/LoremIpsum";
import tw from "twin.macro";

const Container = tw.div`flex w-full`;
const Pane = tw.div`flex-grow p-6 basis-5/12`;
const Separator = tw.div`border-r border-black flex-shrink`;

interface Props {
  mood: "😀" | "😐" | "😢";
}

export const CurrentMood: React.FC<Props> = ({ mood }) => {
  return <Paragraph>My current mood is {mood}</Paragraph>;
};

const SplitPaneDemoBad = () => {
  return (
    <DemoContainer>
      <Container>
        <Pane>
          <CurrentMood mood="😀" />
        </Pane>
        <Separator />
        <Pane>
          <LoremIpsum />
        </Pane>
      </Container>
    </DemoContainer>
  );
};

export default SplitPaneDemoBad;
