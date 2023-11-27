import { DemoContainer } from "../../../components/DemoContainer";
import tw from "twin.macro";
import * as data from "./data";
import { HorrorCharacterItem } from "./HorrorCharacter";
import { MovieCharacterItem } from "./MovieCharacter";
import { nanoid } from "nanoid";

const ListContainer = tw.ul`p-4 border border-gray-500 radius-md`;
const ListItem = tw.li`p-2`;

const ListDemoBetter = () => {
  return (
    <DemoContainer>
      <div>
        <ListContainer>
          {data.characters.map((character) => (
            <ListItem key={nanoid()}>
              <MovieCharacterItem movieCharacter={character} />
            </ListItem>
          ))}
        </ListContainer>
        <ListContainer>
          {data.horrorCharacters.map((character) => (
            <ListItem key={nanoid()}>
              <HorrorCharacterItem horrorCharacter={character} />
            </ListItem>
          ))}
        </ListContainer>
      </div>
    </DemoContainer>
  );
};

export default ListDemoBetter;
