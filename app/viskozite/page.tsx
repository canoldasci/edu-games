"use client";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// Sıvı bilgilerini tutan tip ve obje
type Liquid = {
  name: string;
  description: string;
  color: string; // Tailwind CSS renk sınıfı
  baseViscosity: number; // 0-1 arası temel viskozite değeri (0: akıcı, 1: yoğun)
};

const liquids: Record<string, Liquid> = {
  water: {
    name: "Su",
    description: "Su, düşük viskoziteye sahip, hızlı akan bir sıvıdır.",
    color: "bg-blue-500",
    baseViscosity: 0.2,
  },
  oil: {
    name: "Yağ",
    description: "Yağ, orta derecede viskoziteye sahip bir sıvıdır.",
    color: "bg-yellow-500",
    baseViscosity: 0.5,
  },
  honey: {
    name: "Bal",
    description: "Bal, yüksek viskoziteye sahip, yoğun bir sıvıdır.",
    color: "bg-orange-500",
    baseViscosity: 0.8,
  },
};

const LiquidSimulator: React.FC = () => {
  const [temperature, setTemperature] = useState(20); // Başlangıç sıcaklığı: 20°C
  const [selectedLiquid, setSelectedLiquid] =
    useState<keyof typeof liquids>("water");

  // Slider değeri değiştiğinde state güncellemesi
  const handleSliderChange = (value: number[]) => {
    setTemperature(value[0]);
  };

  // Seçili sıvı bilgileri
  const currentLiquid = liquids[selectedLiquid];

  /* 
     Basit model:
     - Sıcaklık arttıkça sıvının viskozitesi azalır.
     - Simüle Edilen Viskozite = temel viskozite * ((100 - sıcaklık) / 100)
  */
  const simulatedViscosity =
    currentLiquid.baseViscosity * ((100 - temperature) / 100);
  // Görsel temsil için, viskozitenin ters oranı (fluidity) kullanılarak sıvının "akışkanlık" yüzdesi hesaplanır.
  const fluidity = 1 - simulatedViscosity;

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      {/* Üst kısım: Sıvı seçimi */}
      <div className="flex space-x-4">
        {Object.entries(liquids).map(([key, liquid]) => (
          <Button
            key={key}
            variant={selectedLiquid === key ? "default" : "outline"}
            onClick={() => setSelectedLiquid(key as keyof typeof liquids)}
          >
            {liquid.name}
          </Button>
        ))}
      </div>

      {/* Sıcaklık ayarı için slider */}
      <div className="w-full max-w-md">
        <Slider
          defaultValue={[temperature]}
          min={0}
          max={100}
          step={1}
          onValueChange={handleSliderChange}
        />
        <p className="mt-2 text-center">Sıcaklık: {temperature}°C</p>
      </div>

      {/* Görsel Temsil: Sıvının akışkanlığını temsil eden renkli bar */}
      <h1>Viskometre</h1>
      <div className="w-64 h-64 relative border rounded-lg overflow-hidden">
        <div
          className={`absolute bottom-0 w-full transition-all duration-300 ${currentLiquid.color}`}
          style={{
            height: `${fluidity * 100}%`,
          }}
        ></div>
        <span className="absolute top-2 left-2 text-white font-semibold">
          Viskozite: {simulatedViscosity.toFixed(2)}
        </span>
      </div>

      {/* Alt kısım: Açıklama kartı */}
      <Card className="mt-6 max-w-md">
        <CardHeader>
          <CardTitle>{currentLiquid.name}</CardTitle>
          <CardDescription>{currentLiquid.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Temel Viskozite:</strong> {currentLiquid.baseViscosity}
          </p>
          <p className="mt-2">
            <strong>Simüle Edilen Viskozite:</strong>{" "}
            {simulatedViscosity.toFixed(2)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiquidSimulator;
