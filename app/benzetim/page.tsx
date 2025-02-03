"use client";

import { useState } from "react";
import LiquidSelector from "../_components/LiquidSelector";
import TemperatureSlider from "../_components/TemperatureSlider";
import VaporPressureChart from "../_components/VaporPressureChart";

import InfoBox from "../_components/InfoBox";

export default function Home() {
  const [selectedLiquid, setSelectedLiquid] = useState("Water (H₂O)");
  const [temperature, setTemperature] = useState(25);

  return (
    <div className="flex flex-col items-center gap-6 p-6 min-h-screen">
      <h1 className="text-white text-2xl font-bold">
        Vapor Pressure Simulation
      </h1>
      <div className="w-96 space-y-4">
        <LiquidSelector
          selected={selectedLiquid}
          onChange={setSelectedLiquid}
        />
        Sıcaklık
        <TemperatureSlider value={temperature} onChange={setTemperature} />
        <VaporPressureChart liquid={selectedLiquid} />
        <InfoBox liquid={selectedLiquid} />
      </div>
    </div>
  );
}
