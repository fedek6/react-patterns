import tw from "twin.macro";

interface Props {
  left: React.FC;
  right: React.FC;
}

const Container = tw.div`flex w-full`;
const Pane = tw.div`flex-grow p-6 basis-5/12`;
const Separator = tw.div`border-r border-black flex-shrink`;

export const SplitPaneBetter: React.FC<Props> = ({
  right: Right,
  left: Left,
}) => {
  return (
    <Container>
      <Pane>
        <Right />
      </Pane>
      <Separator />
      <Pane>
        <Left />
      </Pane>
    </Container>
  );
};
