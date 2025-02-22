"use client";
import { useState } from "react";
import DragDropGame from "../_components/DragDropGame";
import { atomicRadiusIyon as levels } from "../../constants/orderingGameDataSets";
import DescriptionCard from "../_components/DescriptionCard";

const App = () => {
  const [orderingType, setOrderingType] = useState<string | null>(null);
  const iyon = [
    {
      title:
        "Atom Yarıçapı ve İyonlaşma Enerjisinin Periyodik Tablodaki Konum ile İlişkilendirilmesi",
      description:
        "Periyodik tabloda atomların yarıçapı ve iyonlaşma enerjisi, konumlarına bağlı olarak değişir. Genel olarak:",
    },
    {
      title: "Atom Yarıçapı",
      description: `Gruplarda (dikey sütunlar) yukarıdan aşağıya doğru arttıkça atom yarıçapı artar. Çünkü yeni enerji seviyeleri eklenir ve elektronlar çekirdekten daha uzak konumlanır.
Periyotlarda (yatay satırlar) soldan sağa gidildikçe atom yarıçapı azalır. Çünkü proton sayısı arttıkça çekirdek yükü artar ve elektronları daha güçlü çeker.
`,
    },
    {
      title: "İyonlaşma Enerjisi",
      description: `Gruplarda yukarıdan aşağıya inildikçe iyonlaşma enerjisi azalır. Çünkü dış elektronlar çekirdekten uzaklaşır ve onları koparmak daha kolay olur.
Periyotlarda soldan sağa gidildikçe iyonlaşma enerjisi artar. Çünkü çekirdek yükü artar ve elektronlar daha güçlü tutulur.
`,
    },
  ];
  const handleOrderingType = (type: string) => {
    setOrderingType(type);
  };

  return (
    <>
      <div className="min-h-screen mt-5 mx-1 w-full flex flex-col items-center justify-center relative main-card">
        {!orderingType ? (
          <h1 className="font-medium text-xl text-gray-800 text-center ">
            Atom Yarıçapı ve İyonlaşma Enerjisinin Periyodik Tablodaki Konum ile
            İlişkilendirilmesi
          </h1>
        ) : orderingType === "iyonizationEnergy" ? (
          <h1 className="font-medium text-xl text-gray-800 text-center ">
            İyonlaşma enerjisine göre sıralayın
          </h1>
        ) : (
          <h1 className="font-medium text-xl text-gray-800 text-center ">
            Atom yarıçapına göre sıralayın.
          </h1>
        )}
        <DragDropGame levels={levels} handleOrderingType={handleOrderingType} />
      </div>
    </>
  );
};

export default App;
