import tw from "twin.macro";
import { Paragraph } from "./Paragraph";

const PaddedParagraph = tw(Paragraph)`pb-4`;

export const LoremIpsum: React.FC = () => {
  return (
    <>
      <PaddedParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris
        diam, dictum id diam quis, laoreet imperdiet nisi. Ut lorem justo,
        tempus at iaculis sed, molestie et lacus. Aenean dictum fermentum sem et
        semper. Cras fringilla, sem at aliquet ultrices, enim nunc interdum
        massa, sit amet maximus mauris ex in eros. Fusce laoreet ipsum quis diam
        fermentum fringilla. Mauris malesuada volutpat nibh, et dapibus ex
        auctor eu. Maecenas feugiat dolor vitae posuere tincidunt.
      </PaddedParagraph>
      <PaddedParagraph>
        Praesent nec sem ante. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aenean placerat volutpat augue, a commodo dolor
        molestie sed. Quisque vitae scelerisque nisl. Aliquam eget venenatis
        arcu. Nam facilisis et quam vel varius. Nunc dui tellus, gravida a
        placerat vel, auctor nec tortor. Cras tincidunt vitae felis a dignissim.
        Pellentesque eu blandit sapien. Pellentesque sed egestas est.
      </PaddedParagraph>
    </>
  );
};
