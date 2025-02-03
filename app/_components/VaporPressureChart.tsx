"use client";

import { LIQUIDS } from "../../constants/index";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  liquid: string;
  temperature: number;
}

export default function VaporPressureChart({ liquid, temperature }: Props) {
  const selectedLiquid = LIQUIDS.find((l) => l.name === liquid);
  if (!selectedLiquid) return null;

  const data = Array.from({ length: 101 }, (_, i) => ({
    temperature: i,
    pressure: (selectedLiquid.initialPressure * (1 + i / 100)).toFixed(3),
  }));

  return (
    <div className="w-full bg-gray-800 p-4 rounded-md">
      <h3 className="text-white text-lg font-semibold">
        {liquid} Vapor Pressure
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="temperature" tick={{ fill: "white" }} />
          <YAxis tick={{ fill: "white" }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pressure"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
