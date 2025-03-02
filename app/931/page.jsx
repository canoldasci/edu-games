"use client";
import { useState, useEffect } from "react";
import FluidCard from "../_components/FluidCard";
import DescriptionCard from "../_components/DescriptionCard"; // Açıklama kartı bileşeni
import ValueSelector from "../_components/ValueSelector";
import { Button } from "@/components/ui/button";

const householdWastes = ["Muz Kabuğu", "Çay Atığı", "Portakal Kabuğu"];
const solutions = ["Gümüş Çözeltisi", "Bakır Çözeltisi"];

const finalColors = {
  "Muz Kabuğu-Gümüş Çözeltisi": "#D4AF37", // Altın rengi
  "Muz Kabuğu-Bakır Çözeltisi": "#B87333", // Bakır rengi
  "Çay Atığı-Gümüş Çözeltisi": "#808080", // Gri
  "Çay Atığı-Bakır Çözeltisi": "#A67B5B", // Kahverengi
  "Portakal Kabuğu-Gümüş Çözeltisi": "#C0C0C0", // Gümüş rengi
  "Portakal Kabuğu-Bakır Çözeltisi": "#CD7F32", // Bronz
};

export default function ExperimentSimulator() {
  const [selectedWaste, setSelectedWaste] = useState(householdWastes[0]);
  const [selectedSolution, setSelectedSolution] = useState(solutions[0]);
  const [stepIndex, setStepIndex] = useState(0);
  const [randomPositions, setRandomPositions] = useState([]);

  useEffect(() => {
    if (stepIndex === steps.length - 1) {
    }
    const positions = Array.from({ length: 500 }).map(() => {
      const baseSpeed = 1 / ((stepIndex + 1) * 1.5);
      const randomFactor = Math.random() * 2 + 4;
      const animationSpeed = baseSpeed * randomFactor;
      return {
        bottom: Math.random() * 100,
        left: Math.random() * 90,
        animation: `moveMolecule ${animationSpeed}s infinite alternate`,
      };
    });
    setRandomPositions(positions);
  }, [stepIndex]);

  const steps = [
    "Evsel atık ve çözeltiyi ekleyin.",
    "Karışımı iyice karıştırın ve ısıtın.",
    "Reaksiyonun gerçekleşmesini bekleyin.",
    "Nanopartikuller oluştu ve renk değişti! Bazen çökelti oluşabilir",
  ];

  const handleNextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const handleReset = () => {
    setStepIndex(0);
  };

  const getFluidColor = () => {
    // Başlangıç rengini çözeltiye göre belirle
    if (selectedSolution === "Gümüş Çözeltisi") {
      return "#E0E0E0"; // Açık gri
    }
    if (selectedSolution === "Bakır Çözeltisi") {
      return "#0077BE"; // Mavi
    }
    return "#000"; // Varsayılan renk
  };
  const getParticleColor = () => {
    return finalColors[`${selectedWaste}-${selectedSolution}`] || "#000";
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="flex flex-col space-x-4">
        <ValueSelector
          title="Evsel Atık"
          values={householdWastes}
          selectedIndex={householdWastes.indexOf(selectedWaste)}
          onChange={(index) => setSelectedWaste(householdWastes[index])}
        />
      </div>
      <div className="flex flex-col space-x-4">
        <ValueSelector
          title="Çözelti"
          values={solutions}
          selectedIndex={solutions.indexOf(selectedSolution)}
          onChange={(index) => setSelectedSolution(solutions[index])}
        />
      </div>
      <div className="flex justify-center space-x-10">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-48 border-4 border-gray-500 rounded-lg overflow-hidden bg-gray-200">
            <FluidCard
              fluidity={0.8}
              fluidColor={getFluidColor()}
              randomPositions={
                stepIndex === steps.length - 1 ? randomPositions : []
              }
              particleColor={getParticleColor()}
              particleHeight="2px"
              particleWidth="2px"
            />
          </div>
        </div>
      </div>

      <DescriptionCard
        title={`Adım ${stepIndex + 1}`}
        description={steps[stepIndex]}
      />

      <Button
        onClick={stepIndex === steps.length - 1 ? handleReset : handleNextStep}
      >
        {stepIndex === steps.length - 1 ? "Yeniden Başlat" : "Deneyi Başlat"}
      </Button>
    </div>
  );
}
