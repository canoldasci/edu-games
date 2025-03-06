import DragDropGame from "../../_components/DragDropGame";
import { polar as levels } from "../../../constants/index";

const Polar = () => {
  return (
    <div className="min-h-screen mt-5 mx-1 w-full flex flex-col items-center justify-start relative main-card">
      <h2>Verilen molekülleri polar ya da apolar olarak eşleştiriniz.</h2>
      <DragDropGame levels={levels} />
    </div>
  );
};

export default Polar;
