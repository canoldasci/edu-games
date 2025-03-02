"use client";
import DragDropGame from "../_components/DragDropGame";
import { electronegativity as levels } from "../../constants/orderingGameDataSets";

const App = () => {
  return (
    <>
      <div className="min-h-screen mt-5 mx-1 w-full flex flex-col items-center justify-center relative main-card">
        <h1 className="font-medium text-xl text-gray-800 text-center ">
          Atom numaraları verilen farklı atomların elektronegatiflik
          değerlerinin periyodik tablodaki konumu ile ilişkilendirilerek
          sıralayınız
        </h1>

        <DragDropGame levels={levels} />
      </div>
    </>
  );
};

export default App;
