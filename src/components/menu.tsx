import { Menu as MenuType } from "../config";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import tw, { styled } from "twin.macro";

interface Props {
  elements: MenuType[];
}

const Link = styled.span<{ isActive: boolean }>(({ isActive }) => [
  tw`block p-1`,
  isActive ? tw`text-blue-500` : tw`text-gray-600`,
  tw`hover:text-red-600`
]);

export const Menu: React.FC<Props> = ({ elements }) => {
  return (
    <nav>
      <ul>
        {elements.map((element) => (
          <li key={nanoid()}>
            <NavLink to={element.path}>
              {({ isActive }) => (
                <Link isActive={isActive}>{element.title}</Link>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
