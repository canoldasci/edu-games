"use client";

import { LIQUIDS } from "../../constants/index";

interface Props {
  liquid: string;
}

export default function InfoBox({ liquid }: Props) {
  const selectedLiquid = LIQUIDS.find((l) => l.name === liquid);
  if (!selectedLiquid) return null;

  return (
    <div className="p-4 bg-gray-800 text-white rounded-md">
      <h3 className="text-lg font-semibold">{selectedLiquid.name}</h3>
      <p>
        <strong>Intermolecular Interaction:</strong>{" "}
        {selectedLiquid.interaction}
      </p>
      <p>{selectedLiquid.description}</p>
    </div>
  );
}
