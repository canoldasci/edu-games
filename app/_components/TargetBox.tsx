import Image from "next/image"; // Resim için Image bileşeni
import { Card } from "@/components/ui/card"; // Shadcn Card bileşeni
import { Item, Target } from "../../types/index";
import { cn } from "@/lib/utils";

interface TargetBoxProps {
  state: { target: Target; item: Item | null };
  handleDrop: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
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
        onDrop={(e) => handleDrop(e, index)}
        onDragOver={handleDragOver}
        className={cn(
          "p-4 min-h-8 flex flex-col items-center justify-center rounded-lg w-full",
          {
            "bg-green-200":
              resultsChecked && state.item?.id === state.target.correctItemId,
            "bg-red-200":
              resultsChecked && state.item?.id !== state.target.correctItemId,
            "bg-gray-200": !resultsChecked,
          }
        )}
      >
        <div className="flex items-center">
          {state.item?.image ? (
            <Image
              src={state.item.image}
              alt={state.item.name}
              width={50}
              height={50}
              className="max-w-full h-auto"
            />
          ) : state.item?.name ? (
            <span className="text-center text-md font-bold ">
              {state.item?.name}
            </span>
          ) : (
            <span className="text-center text-sm text-gray-600">
              Buraya sürükleyin
            </span>
          )}
        </div>
        <div className="text-center text-medium ">{state.target.name}</div>
      </Card>
    </>
  );
};
export default TargetBox;
