import React from "react";
import { Card } from "@/components/ui/card"; // Import shadcn Card
import { Item as ItemType } from "../../constants"; // Import dataset

interface ItemProps {
  item: ItemType;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, item: ItemType) => void;
}

const Item: React.FC<ItemProps> = ({ item, handleDragStart }) => {
  return (
    <Card
      draggable
      onDragStart={(e) => handleDragStart(e, item)}
      className="p-4 bg-blue-100 rounded-lg cursor-move hover:bg-blue-200 transition-colors"
    >
      {item.name}
    </Card>
  );
};

export default Item;
