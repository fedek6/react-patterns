import { DemoContainer } from "../../../components/DemoContainer";
import { ReusableList } from "./ReusableList";
import { MovieCharacterItem } from "./MovieCharacter";
import { HorrorCharacterItem } from "./HorrorCharacter";
import * as data from "./data";

const ListDemo = () => {
  const { characters, horrorCharacters } = data;
  return (
    <DemoContainer>
      <div>
        <ReusableList
          items={characters}
          itemComponent={(p) => <MovieCharacterItem {...p} />}
          resourceName="movieCharacter"
        />

        <ReusableList
          items={horrorCharacters}
          itemComponent={(p) => <HorrorCharacterItem {...p} />}
          resourceName="horrorCharacter"
        />
      </div>
    </DemoContainer>
  );
};

export default ListDemo;
