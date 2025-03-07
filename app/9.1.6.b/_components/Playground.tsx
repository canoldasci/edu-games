import DragDropGame from "../../_components/DragDropGame";
import { elektron as levels } from "../../../constants/index";

const App = () => {
  return (
    <div className="min-h-screen mt-5 mx-1 w-full flex flex-col items-center justify-start relative main-card">
      <h2 className="font-medium  text-gray-800 text-center mb-4">
        Verilen elektron dizilimine göre elementin periyodik tabloda hangi
        periyot ve grupta yer aldığını bulunuz
      </h2>
      <DragDropGame levels={levels} />
    </div>
  );
};

export default App;
