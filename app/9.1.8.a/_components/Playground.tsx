"use client";
import { useState } from "react";
import DragDropGame from "../../_components/DragDropGame";
import { atomicRadiusIyon as levels } from "../../../constants/orderingGameDataSets";

const Playground = () => {
  const [orderingType, setOrderingType] = useState<string | null>(null);
  const handleOrderingType = (type: string) => {
    setOrderingType(type);
  };

  return (
    <>
      <div className="min-h-screen mt-5 mx-1 w-full flex flex-col items-center justify-start relative main-card">
        {!orderingType ? (
          <h2 className="font-medium text-xl text-gray-800 text-center mb-2 ">
            Atom Yarıçapı ve İyonlaşma Enerjisinin Periyodik Tablodaki Konum ile
            İlişkilendirilmesi
          </h2>
        ) : orderingType === "iyonizationEnergy" ? (
          <h2 className="font-medium text-xl text-gray-800 text-center mb-2 ">
            İyonlaşma enerjisine göre küçükten büyüğe doğru sıralayın
          </h2>
        ) : (
          <h2 className="font-medium text-xl text-gray-800 text-center mb-2 ">
            Atom yarıçapına göre küçükten büyüğe doğru sıralayın.
          </h2>
        )}
        <DragDropGame levels={levels} handleOrderingType={handleOrderingType} />
      </div>
    </>
  );
};

export default Playground;
