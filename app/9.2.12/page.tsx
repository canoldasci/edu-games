"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DescriptionCard from "../_components/DescriptionCard";

const liquids = ["Su", "Cıva"];
const surfaces = ["Cam", "Plastik"];
const properties = [
  "Yüzey Gerilimi",
  "Kılcallık",
  "Menisküs Görünümü",
  "Islaklık",
];

// 📌 Sıvı + Yüzey + Özellik kombinasyonlarına göre görselleri eşle
const imageMap: Record<string, string> = {
  // Su kombinasyonları
  "Su-Cam-Yüzey Gerilimi": "/images/su-cam-yuzey-gerilimi.jpg",
  "Su-Cam-Kılcallık": "/images/su-cam-kilcallik.jpg",
  "Su-Cam-Menisküs Görünümü": "/images/su-cam-meniskus.jpg",
  "Su-Cam-Islaklık": "/images/su-cam-islaklik.jpg",

  "Su-Plastik-Yüzey Gerilimi": "/images/su-plastik-yuzey-gerilimi.jpg",
  "Su-Plastik-Kılcallık": "/images/su-plastik-kilcallik.jpg",
  "Su-Plastik-Menisküs Görünümü": "/images/su-plastik-meniskus.jpg",
  "Su-Plastik-Islaklık": "/images/su-plastik-islaklik.jpg",

  // Cıva kombinasyonları
  "Cıva-Cam-Yüzey Gerilimi": "/images/civa-cam-yuzey-gerilimi.jpg",
  "Cıva-Cam-Kılcallık": "/images/civa-cam-kilcallik.jpg",
  "Cıva-Cam-Menisküs Görünümü": "/images/civa-cam-meniskus.jpg",
  "Cıva-Cam-Islaklık": "/images/civa-cam-islaklik.jpg",

  "Cıva-Plastik-Yüzey Gerilimi": "/images/civa-plastik-yuzey-gerilimi.jpg",
  "Cıva-Plastik-Kılcallık": "/images/civa-plastik-kilcallik.jpg",
  "Cıva-Plastik-Menisküs Görünümü": "/images/civa-plastik-meniskus.jpg",
  "Cıva-Plastik-Islaklık": "/images/civa-plastik-islaklik.jpg",

  // Varsayılan resim
  default: "/images/default.jpg",
};
export default function CapillaritySimulation() {
  const [selectedLiquid, setSelectedLiquid] = useState(liquids[0]);
  const [selectedSurface, setSelectedSurface] = useState(surfaces[0]);
  const [selectedProperty, setSelectedProperty] = useState(properties[0]);
  const [simulationStarted, setSimulationStarted] = useState(false);

  const handleToggleSimulation = () => {
    setSimulationStarted((prev) => !prev);
  };

  // 📌 Seçime göre resim belirle
  const imageKey = `${selectedLiquid}-${selectedSurface}-${selectedProperty}`;
  const simulationImage = imageMap[imageKey] || imageMap["default"];
  console.log(imageKey, simulationImage);

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h1 className="text-2xl font-bold">
        Yüzey Gerilimi ve Kılcallık Simülasyonu
      </h1>

      {!simulationStarted && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Sıvı Seç */}
          <div className="flex flex-col items-center space-y-2">
            <label className="text-lg font-semibold">Sıvı Seç</label>
            <Select value={selectedLiquid} onValueChange={setSelectedLiquid}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sıvı seçiniz" />
              </SelectTrigger>
              <SelectContent>
                {liquids.map((liquid) => (
                  <SelectItem key={liquid} value={liquid}>
                    {liquid}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Yüzey Seç */}
          <div className="flex flex-col items-center space-y-2">
            <label className="text-lg font-semibold">Yüzey Seç</label>
            <Select value={selectedSurface} onValueChange={setSelectedSurface}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Yüzey seçiniz" />
              </SelectTrigger>
              <SelectContent>
                {surfaces.map((surface) => (
                  <SelectItem key={surface} value={surface}>
                    {surface}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Özellik Seç */}
          <div className="flex flex-col items-center space-y-2">
            <label className="text-lg font-semibold">Özellik Seç</label>
            <Select
              value={selectedProperty}
              onValueChange={setSelectedProperty}
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Özellik seçiniz" />
              </SelectTrigger>
              <SelectContent>
                {properties.map((property) => (
                  <SelectItem key={property} value={property}>
                    {property}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      <Button onClick={handleToggleSimulation}>
        {simulationStarted ? "Tekrarla" : "Simülasyonu Başlat"}
      </Button>

      {simulationStarted && (
        <Card className="mt-6 p-4 w-full max-w-md">
          <CardContent className="flex flex-col items-center gap-4">
            <img
              src={simulationImage}
              alt="Simülasyon Görseli"
              className="rounded-lg w-full h-auto"
            />
            <DescriptionCard
              title="Simülasyon Sonucu"
              description={`Seçilen sıvı: ${selectedLiquid}, yüzey: ${selectedSurface}, özellik: ${selectedProperty}. Buna bağlı olarak gözlemlediğimiz sonuçları analiz edebilirsiniz.`}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
