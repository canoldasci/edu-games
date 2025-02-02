"use client";
import { useState } from "react";
import { Slider } from "../../components/ui/slider";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectContent,
} from "../../components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const liquids = [
  { id: "water", name: "Su" },
  { id: "ethanol", name: "Etanol" },
  { id: "ether", name: "Eter" },
  { id: "mercury", name: "Cıva" },
];

const Home = () => {
  const [selectedLiquid, setSelectedLiquid] = useState(liquids[0].id);
  const [temperature, setTemperature] = useState(25);
  const [pressure, setPressure] = useState(1);
  const [interactionStrength, setInteractionStrength] = useState(1);

  const calculateVaporPressure = (x: number) => {
    // Sıvıya göre buhar basıncı hesaplama
    const basePressure = {
      water: 23.8,
      ethanol: 59.0,
      ether: 35.0, // Eter için bir değer örneği
      mercury: 1700.0, // Cıva için bir değer örneği
    }[selectedLiquid];

    return (
      basePressure ||
      1 *
        (1 + temperature / 100) *
        (1 + pressure / 10) *
        interactionStrength *
        (x / 100)
    );
  };

  const data = Array.from({ length: 100 }, (_, i) => ({
    name: `${i + 1}`,
    pressure: calculateVaporPressure(i + 1),
  }));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Buhar Basıncı Simülasyonu</h1>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Sıvı Seçin:</label>
          <Select value={selectedLiquid} onValueChange={setSelectedLiquid}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sıvı Seçin:" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {liquids.map((liquid) => (
                  <SelectItem key={liquid.id} value={liquid.id}>
                    {liquid.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block mb-2">Sıcaklık (°C): {temperature}</label>
          <Slider
            min={0}
            max={100}
            value={[temperature]}
            onValueChange={(value) => setTemperature(value[0])}
          />
        </div>
        <div>
          <label className="block mb-2">Basınç (atm): {pressure}</label>
          <Slider
            min={0}
            max={10}
            value={[pressure]}
            onValueChange={(value) => setPressure(value[0])}
          />
        </div>
        <div>
          <label className="block mb-2">
            Moleküller Arası Etkileşim: {interactionStrength}
          </label>
          <Slider
            min={0.1}
            max={2}
            step={0.1}
            value={[interactionStrength]}
            onValueChange={(value) => setInteractionStrength(value[0])}
          />
        </div>
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pressure"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;
