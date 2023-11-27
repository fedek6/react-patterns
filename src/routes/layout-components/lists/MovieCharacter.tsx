import { Character } from "./data";

interface Props {
  movieCharacter: Character;
}

export const MovieCharacterItem: React.FC<Props> = ({ movieCharacter }) => (
  <>
    <p>
      <em>{movieCharacter.movie}</em>: {movieCharacter.name}
    </p>
    <p>{movieCharacter.description}</p>
  </>
);
