import { Menu as MenuType } from "../config";

interface Props {
  elements: MenuType[];
}

export const Menu: React.FC<Props> = ({ elements }) => {
  return (
    <nav>
      <ul>
        {elements.map((element) => (
          <li>
            <a href={element.path}>{element.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
