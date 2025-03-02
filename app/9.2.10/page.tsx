"use client";
import React, { useState } from "react";
import FluidCard from "../_components/FluidCard";
import { Button } from "@/components/ui/button";
import ValueSelector from "../_components/ValueSelector";
import DescriptionCard from "../_components/DescriptionCard";

// Sıvıların kaynama noktası verileri
const fluids = {
  su: {
    color: "#3b82f6",
    data: [
      { pressure: 1, boilingPoint: 100 },
      { pressure: 2, boilingPoint: 120 },
      { pressure: 3, boilingPoint: 130 },
    ],
  },
  etanol: {
    color: "#f59e0b",
    data: [
      { pressure: 1, boilingPoint: 78 },
      { pressure: 2, boilingPoint: 95 },
      { pressure: 3, boilingPoint: 110 },
    ],
  },
  civa: {
    color: "#6b7280",
    data: [
      { pressure: 1, boilingPoint: 357 },
      { pressure: 2, boilingPoint: 380 },
      { pressure: 3, boilingPoint: 400 },
    ],
  },
};
const boilingPointData = {
  title: "Basınç & Kaynama Noktası",
  description: `Basınç arttıkça sıvıların kaynama noktası yükselir. Bu simülasyonda
  su, etanol ve civanın basınca göre kaynama noktalarını
  gözlemleyebilirsiniz.`,
};

const PressureSimulation: React.FC = () => {
  const [pressureIndex, setPressureIndex] = useState(0); // Başlangıç: 1 atm
  const pressures = fluids.su.data.map((data) => data.pressure);

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      <ValueSelector
        title="Basınç"
        values={pressures}
        selectedIndex={pressureIndex}
        onChange={setPressureIndex}
        unit=" atm"
      />

      {/* Sıvılar */}
      <div className="flex justify-center items-center flex-wrap gap-5">
        {Object.entries(fluids).map(([key, fluid]) => {
          const { data, color } = fluid;
          const { boilingPoint } = data[pressureIndex];

          return (
            <div key={key} className="flex flex-col items-center">
              <h3 className="text-lg font-medium capitalize">{key}</h3>
              {/* Sıvı Kabı */}
              <div className="relative w-32 h-48 border-4 border-gray-500 rounded-lg overflow-hidden bg-gray-200">
                <FluidCard fluidity={0.8} fluidColor={color} />
              </div>
              {/* Kaynama Noktası Göstergesi */}
              <div className="flex flex-col items-center mt-3">
                <div className="w-32 h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 transition-all duration-500"
                    style={{ width: `${(boilingPoint / 400) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm mt-1">
                  Kaynama Noktası: {boilingPoint}°C
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <DescriptionCard
        title={boilingPointData.title}
        description={boilingPointData.description}
      />
    </div>
  );
};

export default PressureSimulation;
