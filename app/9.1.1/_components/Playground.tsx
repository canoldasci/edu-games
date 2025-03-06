import DragDropGame from "../../_components/DragDropGame";
import { gunlukKimya as levels } from "../../../constants/index"; // gunlukKimya veri setini dışarıdan al

const App = () => {
  return (
    <div className="min-h-screen font-thin mx-1 w-full flex flex-col items-center justify-start relative gap-3 ">
      <h2>
        Verilen kimyasalın her birini günlük hayattaki kullanım alanı ile
        eşleştiriniz.
      </h2>
      <DragDropGame levels={levels} />
    </div>
  );
};

export default App;
