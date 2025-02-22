import Image from "next/image"; // Resim için Image bileşeni
import { Card } from "@/components/ui/card"; // Shadcn Card bileşeni
import { Item, Target } from "../../types/index";

interface TargetBoxProps {
  state: any;
  handleDrop: (e: any, index: number) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  resultsChecked: boolean;
  index: number;
}
const TargetBox = ({
  state,
  handleDrop,
  handleDragOver,
  resultsChecked,
  index,
}: TargetBoxProps) => {
  return (
    <>
      <Card
        key={state.target.id}
        onDrop={(e) => handleDrop(e, index)}
        onDragOver={handleDragOver}
        className={`p-4 min-h-8 flex flex-col items-center justify-center rounded-lg w-full ${
          resultsChecked
            ? state.item?.id === state.target.correctItemId
              ? "bg-green-200"
              : "bg-red-200"
            : "bg-gray-200"
        }`}
      >
        <div className="text-sm font-medium text-gray-600">
          {state.target.name}
        </div>
        <div className="text-lg font-bold">
          {state.item?.image ? (
            <Image
              src={state.item.image}
              alt={state.item.name}
              width={50}
              height={50}
              className="max-w-full h-auto"
            />
          ) : state.item?.name ? (
            <span>{state.item?.name}</span>
          ) : (
            <span className="font-thin">Buraya sürükleyin</span>
          )}
        </div>
      </Card>
    </>
  );
};
export default TargetBox;
