import DragDropGame from "../../_components/DragDropGame";
import { polar as levels } from "../../../constants/index";
import DescriptionCard from "@/app/_components/DescriptionCard";

const Polar = () => {
  return (
    <div className="min-h-screen mt-5 mx-1 w-full flex flex-col items-center justify-center relative main-card">
      <DescriptionCard title="" content="" />
      <DragDropGame levels={levels} />
    </div>
  );
};

export default Polar;
