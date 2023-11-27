import { HorrorCharacter as HorrorCharacterType } from "./data";

interface Props {
  horrorCharacter: HorrorCharacterType;
}

export const HorrorCharacterItem: React.FC<Props> = ({ horrorCharacter }) => (
  <>
    <p>
      <em>{horrorCharacter.name}</em>:{" "}
      <strong>{horrorCharacter.strength}</strong>
    </p>
    <p>{horrorCharacter.description}</p>
  </>
);
