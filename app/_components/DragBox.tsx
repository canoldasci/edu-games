import Image from "next/image"; // Resim için Image bileşeni
import { Card } from "@/components/ui/card"; // Shadcn Card bileşeni
import { Item } from "../../types/index";

interface DragBoxProps {
  item: Item;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, item: Item) => void;
}
const DragBox = ({ item, handleDragStart }: DragBoxProps) => {
  return (
    <>
      <Card
        draggable
        onDragStart={(e) => handleDragStart(e, item)}
        className="flex justify-center items-center p-4 min-h-8 bg-blue-100 rounded-lg cursor-move hover:bg-blue-200 transition-colors w-full"
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            width={50}
            height={50}
            className="max-w-full h-auto"
          />
        ) : (
          <span className="text-sm">{item.name}</span>
        )}
      </Card>
    </>
  );
};
export default DragBox;
