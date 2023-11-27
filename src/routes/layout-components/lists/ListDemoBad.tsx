import { DemoContainer } from "../../../components/DemoContainer";
import tw from "twin.macro";
import * as data from "./data";
import { nanoid } from "nanoid";

const ListContainer = tw.ul`p-4 border border-gray-500 radius-md`;
const ListItem = tw.li`p-2`;

const ListDemoBad = () => {
  return (
    <DemoContainer>
      <div>
        <ListContainer>
          {data.characters.map((character) => (
            <ListItem key={nanoid()}>
              <p>
                <em>{character.movie}</em>: {character.name}
              </p>
              <p>{character.description}</p>
            </ListItem>
          ))}
        </ListContainer>
        <ListContainer>
          {data.horrorCharacters.map((character) => (
            <ListItem key={nanoid()}>
              <p>
                <em>{character.name}</em>: <strong>{character.strength}</strong>
              </p>
              <p>{character.description}</p>
            </ListItem>
          ))}
        </ListContainer>
      </div>
    </DemoContainer>
  );
};

export default ListDemoBad;
