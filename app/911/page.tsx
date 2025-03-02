import DragDropGame from "../_components/DragDropGame";
import { gunlukKimya as levels } from "../../constants/index"; // gunlukKimya veri setini dışarıdan al

const App = () => {
  return (
    <div className="min-h-screen mt-5 mx-1 w-full flex flex-col items-center justify-center relative main-card">
      <h1 className="font-medium text-xl text-gray-800 text-center mb-4">
        Verilen kimyasalın her birini <br /> günlük hayattaki kullanım alanı ile
        eşleştiriniz.
      </h1>
      <DragDropGame levels={levels} />
    </div>
  );
};

export default App;
