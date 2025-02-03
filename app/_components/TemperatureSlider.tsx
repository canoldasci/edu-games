"use client";

import { Slider } from "@/components/ui/slider";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function TemperatureSlider({ value, onChange }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-white text-lg font-semibold">
        Temperature: {value}°C
      </label>
      <Slider
        defaultValue={[value]}
        max={100}
        step={1}
        onValueChange={(val) => onChange(val[0])}
      />
    </div>
  );
}
