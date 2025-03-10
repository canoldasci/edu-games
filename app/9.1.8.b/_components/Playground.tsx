"use client";
import DragDropGame from "../../_components/DragDropGame";
import { electronegativity as levels } from "../../../constants/orderingGameDataSets";

const Playground = () => {
  return (
    <>
      <div className="min-h-screen mt-5 mx-1 w-full flex flex-col items-center justify-start relative main-card">
        <h2 className="font-medium text-gray-800 text-center mb-3 ">
          Atom numaraları verilen farklı atomların elektronegatiflik
          değerlerinin periyodik tablodaki konumu ile ilişkilendirilerek
          büyükten küçüğe sıralayınız
        </h2>

        <DragDropGame levels={levels} />
      </div>
    </>
  );
};

export default Playground;
