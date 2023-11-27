/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { nanoid } from "nanoid";
import tw from "twin.macro";

interface ReusableListProps<ItemType> {
  items: ItemType[];
  resourceName: string;
  itemComponent: React.ComponentType<any>;
}

const ListContainer = tw.ul`p-4 border border-gray-500 rounded-md mb-4`;
const ListItem = tw.li`p-2`;

export const ReusableList = <ItemType extends object>({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: ReusableListProps<ItemType>) => {
  return (
    <ListContainer>
      {items.map((item) => (
        <ListItem key={nanoid()}>
          <ItemComponent {...{ [resourceName]: item }} />
        </ListItem>
      ))}
    </ListContainer>
  );
};
