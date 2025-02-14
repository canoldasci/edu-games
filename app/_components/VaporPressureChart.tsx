"use client";
import React, { useState } from "react";

// Basınç aralıkları ve sıvıların kaynama noktası verileri
const allowedPressures = [1, 2, 3]; // Basınç değerleri (atm)
const fluidData = {
  su: [
    { pressure: 1, boilingPoint: 100 }, // 1 atm'de kaynama noktası
    { pressure: 2, boilingPoint: 120 }, // 2 atm'de kaynama noktası
    { pressure: 3, boilingPoint: 130 }, // 3 atm'de kaynama noktası
  ],
  etanol: [
    { pressure: 1, boilingPoint: 78 }, // 1 atm'de kaynama noktası
    { pressure: 2, boilingPoint: 95 }, // 2 atm'de kaynama noktası
    { pressure: 3, boilingPoint: 110 }, // 3 atm'de kaynama noktası
  ],
};

const PressureSimulation: React.FC = () => {
  const [pressureIndex, setPressureIndex] = useState(0); // Başlangıç: 1 atm

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      {/* Basınç Kontrolü */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-semibold">
          Basınç: {allowedPressures[pressureIndex]} atm
        </h2>
        <div className="flex space-x-2">
          {allowedPressures.map((pressure, index) => (
            <button
              key={pressure}
              onClick={() => setPressureIndex(index)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                pressureIndex === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {pressure} atm
            </button>
          ))}
        </div>
      </div>

      {/* Sıvılar */}
      <div className="flex justify-center space-x-10">
        {(["su", "etanol"] as const).map((fluid) => {
          const { boilingPoint } = fluidData[fluid][pressureIndex];

          return (
            <div key={fluid} className="flex flex-col items-center">
              <h3 className="text-lg font-medium capitalize">{fluid}</h3>

              {/* Sıvı Kabı */}
              <div className="relative w-32 h-48 border-4 border-gray-500 rounded-lg overflow-hidden bg-gray-200">
                {/* Sıvı Seviyesi */}
                <div
                  className="absolute bottom-0 left-0 w-full transition-all duration-500"
                  style={{
                    height: `${boilingPoint}%`, // Kaynama noktasına göre sıvı seviyesi
                    backgroundColor: fluid === "su" ? "#3b82f6" : "#f59e0b", // Su: Mavi, Etanol: Turuncu
                  }}
                ></div>

                {/* Kaynama Noktası Değeri */}
                <div className="absolute top-2 left-2 text-sm font-medium">
                  Kaynama Noktası: {boilingPoint}°C
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Açıklama Kartı */}
      <div className="w-full max-w-xl p-4 bg-white shadow-md rounded-md">
        <h2 className="text-lg font-semibold">Basınç & Kaynama Noktası</h2>
        <p className="text-sm text-gray-600 mt-2">
          Basınç arttıkça sıvıların kaynama noktası yükselir. Bu simülasyonda su
          ve etanolün basınca göre kaynama noktalarını gözlemleyebilirsiniz.
        </p>
      </div>
    </div>
  );
};

export default PressureSimulation;
