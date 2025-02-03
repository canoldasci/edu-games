"use client";

import { LIQUIDS } from "../../constants/index";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  selected: string;
  onChange: (value: string) => void;
}

export default function LiquidSelector({ selected, onChange }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white text-lg font-semibold">Select Liquid:</label>
      <Select value={selected} onValueChange={onChange}>
        <SelectTrigger className="w-full bg-gray-800 text-white">
          <SelectValue placeholder="Choose a liquid" />
        </SelectTrigger>
        <SelectContent>
          {LIQUIDS.map((liquid) => (
            <SelectItem key={liquid.name} value={liquid.name}>
              {liquid.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
