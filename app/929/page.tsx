"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Shadcn Button bileşeni
import DescriptionCard from "../_components/DescriptionCard"; // Açıklama kartı bileşeni
import { cardData } from "../../constants/index"; // cardData objesi
import ValueSelector from "../_components/ValueSelector"; // Reusable ValueSelector bileşeni
import FluidCard from "../_components/FluidCard"; // Reusable LiquidContent bileşeni
import { fluids } from "../../constants/index"; // Sıvı verileri

const LiquidSimulation: React.FC = () => {
  const [selectedFluid, setSelectedFluid] = useState<keyof typeof fluids>("su"); // Seçili sıvı
  const [tempIndex, setTempIndex] = useState(0); // Seçili sıcaklık indeksi
  const [randomPositions, setRandomPositions] = useState<
    { bottom: number; left: number; animation: string }[]
  >([]);

  // Moleküllerin rastgele pozisyonlarını istemci tarafında oluştur
  useEffect(() => {
    const positions = Array.from({ length: 15 }).map(() => {
      const baseSpeed = 1 / ((tempIndex + 1) * 1.5); // tempIndex büyüdükçe süre azalır, hız artar
      const randomFactor = Math.random() * 2 + 4;
      const animationSpeed = baseSpeed * randomFactor;

      return {
        bottom: Math.random() * 100,
        left: Math.random() * 90,
        animation: `moveMolecule ${animationSpeed}s infinite alternate`,
      };
    });

    setRandomPositions(positions);
  }, [tempIndex]);

  // Seçili sıvının verilerini al
  const fluidData = fluids[selectedFluid];
  console.log(fluidData);
  const { vaporPressure } = fluidData.vaporPressureData[tempIndex];
  console.log(vaporPressure);

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      {/* Sıvı Seçimi */}
      <div className="flex space-x-2">
        {Object.keys(fluids).map((fluid) => (
          <Button
            key={fluid}
            onClick={() => setSelectedFluid(fluid as keyof typeof fluids)}
            variant={selectedFluid === fluid ? "default" : "outline"}
          >
            {fluid}
          </Button>
        ))}
      </div>

      {/* Sıcaklık ve Basınç Kontrolü */}
      <div className="flex flex-col space-x-4">
        <ValueSelector
          title="Sıcaklık"
          values={fluidData.vaporPressureData.map((data) => data.temp)}
          selectedIndex={tempIndex}
          onChange={setTempIndex}
          unit="°C"
        />
      </div>

      {/* Sıvı Kabı */}
      <div className="flex justify-center space-x-10">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-medium capitalize">{fluidData.name}</h3>
          <div className="relative w-32 h-48 border-4 border-gray-500 rounded-lg overflow-hidden bg-gray-200">
            <FluidCard
              fluidity={0.8}
              fluidColor={fluidData.color}
              randomPositions={randomPositions}
              vaporPressure={vaporPressure}
            />
          </div>
        </div>
      </div>

      {/* Açıklama Kartı */}
      <DescriptionCard
        title={cardData.title}
        description={fluidData.description}
      />
    </div>
  );
};

export default LiquidSimulation;
