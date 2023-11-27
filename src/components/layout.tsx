import tw from "twin.macro";

interface Props {
  children: React.ReactNode[];
}

const Container = tw.div`flex p-8 w-full`;
const LeftContainer = tw.div`p-8`;
const RightContainer = tw.main`p-8 border-t border-t-black flex-grow`;

export const Layout: React.FC<Props> = ({ children }) => {
  if (children.length !== 2)
    throw new Error("Layout component must have exactly two children");

  const [left, right] = children;

  return (
    <Container>
      <LeftContainer>{left}</LeftContainer>
      <RightContainer>{right}</RightContainer>
    </Container>
  );
};
