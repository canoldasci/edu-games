import DragDropGame from "../../_components/DragDropGame";
import { piktogram as levels } from "../../../constants/index";
import DescriptionCard from "@/app/_components/DescriptionCard";

const Playground = () => {
  return (
    <div className="min-h-screen  mx-1 w-full flex flex-col items-center justify-start relative gap-1 ">
      <h2>Verilen piktogramları doğru açıklama ile eşleştiriniz</h2>
      <DragDropGame levels={levels} />
    </div>
  );
};

export default Playground;
