"use client";
import React, { useState, useEffect } from "react";
import DescriptionCard from "../../_components/DescriptionCard";
import { viskoziteData } from "@/constants";
import ValueSelector from "../../_components/ValueSelector";
import FluidCard from "../../_components/FluidCard";

const fluids = {
  su: {
    color: "#3b82f6",
    data: [
      { temp: 20, visc: 1000, fluidity: 0.9 },
      { temp: 40, visc: 650, fluidity: 0.93 },
      { temp: 60, visc: 470, fluidity: 0.95 },
      { temp: 80, visc: 360, fluidity: 0.97 },
      { temp: 100, visc: 280, fluidity: 1.0 },
    ],
  },
  bal: {
    color: "#f59e0b",
    data: [
      { temp: 20, visc: 30000, fluidity: 0.2 },
      { temp: 40, visc: 3000, fluidity: 0.5 },
      { temp: 60, visc: 600, fluidity: 0.7 },
      { temp: 80, visc: 300, fluidity: 0.85 },
      { temp: 100, visc: 125, fluidity: 0.95 },
    ],
  },
  yag: {
    color: "#10b981",
    data: [
      { temp: 20, visc: 82500, fluidity: 0.3 },
      { temp: 40, visc: 32500, fluidity: 0.55 },
      { temp: 60, visc: 12500, fluidity: 0.75 },
      { temp: 80, visc: 7500, fluidity: 0.85 },
      { temp: 100, visc: 5000, fluidity: 0.9 },
    ],
  },
};
// Logaritmik ölçekte viskozite değerini normalize eder
const normalizeViscosity = (visc: number, minVisc: number, maxVisc: number) => {
  const logMin = Math.log10(minVisc);
  const logMax = Math.log10(maxVisc);
  const logVisc = Math.log10(visc);
  return (logVisc - logMin) / (logMax - logMin); // Viskozite arttıkça artacak şekilde
};

const LiquidSimulation: React.FC = () => {
  const [tempIndex, setTempIndex] = useState(0);
  const [randomPositions, setRandomPositions] = useState<
    { bottom: number; left: number; animation: string }[]
  >([]);

  useEffect(() => {
    const positions = Array.from({ length: 15 }).map(() => {
      const baseSpeed = 1 / ((tempIndex + 1) * 1.5);
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

  const { data: fluidData } = fluids["su"];

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      <ValueSelector
        title="Sıcaklık"
        values={fluidData.map((data) => data.temp)}
        selectedIndex={tempIndex}
        onChange={setTempIndex}
        unit="°C"
      />

      <div className="flex justify-center items-center flex-wrap">
        {Object.entries(fluids).map(([key, fluid]) => {
          const { data, color } = fluid;
          const { visc, fluidity } = data[tempIndex];
          const minVisc = data[data.length - 1].visc;
          const maxVisc = data[0].visc;
          const normalizedVisc = normalizeViscosity(visc, minVisc, maxVisc);

          return (
            <div key={key} className="flex flex-col items-center gap-2">
              <h3 className="text-lg font-medium capitalize">{key}</h3>
              {/* Sıvı Kabı */}
              <div className="relative w-32 h-48 border-4 border-gray-500 rounded-lg overflow-hidden bg-gray-200">
                <FluidCard
                  fluidity={fluidity}
                  fluidColor={color}
                  randomPositions={randomPositions}
                />
                {/* Akışkanlık Değeri */}
                <div className="absolute top-2 left-2 text-sm font-medium">
                  Akışkanlık
                </div>
              </div>
              {/* Viskozite Göstergesi */}
              <div className="flex flex-col items-center mt-3">
                <div className="w-32 h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{
                      width: `${Math.max(normalizedVisc * 100, 5)}%`, // Minimum %5 genişlik
                    }}
                  ></div>
                </div>
                <span className="text-sm mt-1">Viskozite</span>
              </div>
            </div>
          );
        })}
      </div>

      <DescriptionCard
        title={viskoziteData.title}
        description={viskoziteData.description}
      />
    </div>
  );
};

export default LiquidSimulation;
