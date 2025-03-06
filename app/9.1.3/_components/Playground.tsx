import OrderingGame from "../../_components/OrderingGame";
import { atomicTheories as levels } from "../../../constants/orderingGameDataSets";
import DragDropGame from "@/app/_components/DragDropGame";

const Playground = () => {
  return (
    <div className="min-h-screen  mx-1 w-full flex flex-col items-center justify-start relative gap-1 ">
      <h2>Atom teorilerini kronolojik sıraya göre sıralayınız.</h2>
      <DragDropGame levels={levels} />
    </div>
  );
};

export default Playground;
