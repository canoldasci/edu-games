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
  const [pressureIndex, setPressureIndex] = useState(0); // Seçili basınç indeksi
  const [randomPositions, setRandomPositions] = useState<
    { bottom: number; left: number; animation: string }[]
  >([]);

  // Moleküllerin rastgele pozisyonlarını istemci tarafında oluştur
  useEffect(() => {
    const positions = Array.from({ length: 15 }).map(() => ({
      bottom: Math.random() * 100,
      left: Math.random() * 90,
      animation: `moveMolecule ${Math.random() * 2 + 1}s infinite alternate`,
    }));
    setRandomPositions(positions);
  }, [tempIndex, pressureIndex]); // Sıcaklık veya basınç değiştiğinde yeniden hesapla

  // Seçili sıvının verilerini al
  const fluidData = fluids[selectedFluid];
  const { vaporPressure: baseVaporPressure } =
    fluidData.vaporPressureData[tempIndex];
  // Basıncın buhar basıncına etkisi
  const vaporPressure = baseVaporPressure / (1 + pressureIndex * 0.1); // Basınç arttıkça buhar basıncı azalır

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
        <ValueSelector
          title="Basınç"
          values={fluidData.vaporPressureData.map((data) => data.pressure)}
          selectedIndex={pressureIndex}
          onChange={setPressureIndex}
          unit="kPa"
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
