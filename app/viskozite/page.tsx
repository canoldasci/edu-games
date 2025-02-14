"use client";
import React, { useState, useEffect } from "react";
import DescriptionCard from "../_components/DescriptionCard";
import { viskoziteData } from "@/constants";
import ValueSelector from "../_components/ValueSelector";
import FluidCard from "../_components/FluidCard";
// Sıcaklık aralıkları ve sıvıların viskozite ve akışkanlık verileri
const allowedTemperatures = [20, 40, 60, 80, 100]; // Sıcaklık değerleri 20'şer artıyor

const fluidData = {
  su: [
    { temp: 20, visc: 1000, fluidity: 0.9 },
    { temp: 40, visc: 650, fluidity: 0.93 },
    { temp: 60, visc: 470, fluidity: 0.95 },
    { temp: 80, visc: 360, fluidity: 0.97 },
    { temp: 100, visc: 280, fluidity: 1.0 },
  ],
  bal: [
    { temp: 20, visc: 30000, fluidity: 0.2 },
    { temp: 40, visc: 3000, fluidity: 0.5 },
    { temp: 60, visc: 600, fluidity: 0.7 },
    { temp: 80, visc: 300, fluidity: 0.85 },
    { temp: 100, visc: 125, fluidity: 0.95 },
  ],
  yağ: [
    { temp: 20, visc: 82500, fluidity: 0.3 },
    { temp: 40, visc: 32500, fluidity: 0.55 },
    { temp: 60, visc: 12500, fluidity: 0.75 },
    { temp: 80, visc: 7500, fluidity: 0.85 },
    { temp: 100, visc: 5000, fluidity: 0.9 },
  ],
};

// Logaritmik ölçekte viskozite değerini normalize eder
const normalizeViscosity = (visc: number, minVisc: number, maxVisc: number) => {
  const logMin = Math.log10(minVisc);
  const logMax = Math.log10(maxVisc);
  const logVisc = Math.log10(visc);
  return (logVisc - logMin) / (logMax - logMin); // Viskozite arttıkça artacak şekilde
};

const LiquidSimulation: React.FC = () => {
  const [tempIndex, setTempIndex] = useState(0); // Başlangıç: 20°C
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
  }, [tempIndex]); // Sıcaklık değiştiğinde yeniden hesapla

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      {/* Sıcaklık Kontrolü */}
      <ValueSelector
        title="Sıcaklık"
        values={allowedTemperatures}
        selectedIndex={tempIndex}
        onChange={setTempIndex}
        unit="°C"
      />

      {/* Sıvılar */}
      <div className="flex justify-center items-center flex-wrap space-x-10">
        {(["su", "bal", "yağ"] as const).map((fluid) => {
          const { visc, fluidity } = fluidData[fluid][tempIndex];
          const minVisc = fluidData[fluid][fluidData[fluid].length - 1].visc;
          const maxVisc = fluidData[fluid][0].visc;
          const normalizedVisc = normalizeViscosity(visc, minVisc, maxVisc);

          return (
            <div key={fluid} className="flex flex-col items-center">
              <h3 className="text-lg font-medium capitalize">{fluid}</h3>

              {/* Sıvı Kabı */}
              <div className="relative w-32 h-48 border-4 border-gray-500 rounded-lg overflow-hidden bg-gray-200">
                {/* Sıvı Seviyesi */}
                <FluidCard
                  fluidity={fluidity}
                  fluidColor={
                    fluid === "su"
                      ? "#3b82f6"
                      : fluid === "bal"
                      ? "#f59e0b"
                      : "#10b981"
                  }
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

      {/* Açıklama Kartı */}
      <DescriptionCard
        title={viskoziteData.title}
        description={viskoziteData.description}
      />
    </div>
  );
};

export default LiquidSimulation;
