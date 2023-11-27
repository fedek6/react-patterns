import tw from "twin.macro";

interface Props {
  children: React.ReactNode[];
}

const Container = tw.div`flex w-full`;
const Pane = tw.div`flex-grow p-6 basis-5/12`;
const Separator = tw.div`border-r border-black flex-shrink`;

export const SplitPane: React.FC<Props> = ({ children }) => {
  const [left, right] = children;

  return (
    <Container>
      <Pane>{left}</Pane>
      <Separator />
      <Pane>{right}</Pane>
    </Container>
  );
};
