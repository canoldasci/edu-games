import DragDropGame from "../../_components/DragDropGame";
import { iyon as levels } from "../../../constants/index";

const App = () => {
  return (
    <div className="min-h-screen mt-5 mx-1 w-full flex flex-col items-center justify-start relative main-card">
      <h1 className="font-medium  text-gray-800 text-center mb-5">
        Verilen iyonların (katyon ve anyon) isimlerini, doğru formülleriyle
        eşleştiriniz.
      </h1>
      <DragDropGame levels={levels} />
    </div>
  );
};

export default App;
