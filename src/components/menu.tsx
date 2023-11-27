import { Menu as MenuType } from "../config";
import { Link } from "react-router-dom"
import { nanoid } from 'nanoid';

interface Props {
  elements: MenuType[];
}

export const Menu: React.FC<Props> = ({ elements }) => {
  return (
    <nav>
      <ul>
        {elements.map((element) => (
          <li key={nanoid()}>
            <Link to={element.path}>{element.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
