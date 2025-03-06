import React, { useState } from "react";
import DescriptionCard from "@/app/_components/DescriptionCard";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LewisElement as Element, MoleculeTemplate } from "@/types";
import { elements, moleculeTemplates } from "@/constants";
import Image from "next/image";

const LewisStructureGame: React.FC = () => {
  const [selectedElements, setSelectedElements] = useState<Element[]>([]);
  const [score, setScore] = useState<number>(0);
  const [currentMolecule, setCurrentMolecule] =
    useState<MoleculeTemplate | null>(null);
  const [feedback, setFeedback] = useState<string>("");

  const handleElementSelect = (element: Element): void => {
    if (selectedElements.length < 5) {
      // Maksimum 5 element seçilebilir (Metan için)
      setSelectedElements([...selectedElements, element]);
    }
  };

  const checkLewisStructure = (): void => {
    const selectedSymbols = selectedElements.map((el) => el.symbol);

    // Daha esnek kontrol mekanizması
    const currentTemplate = moleculeTemplates.find((mol) => {
      // Tüm gerekli elementler seçilmiş mi?
      const hasRequiredElements = mol.requiredElements.every((req) =>
        selectedSymbols.includes(req)
      );

      // Her element için doğru sayıda seçim yapılmış mı?
      const hasCorrectCounts = mol.correctStructure.every(
        (struct) =>
          selectedElements.filter((el) => el.symbol === struct.symbol)
            .length === struct.count
      );

      return hasRequiredElements && hasCorrectCounts;
    });

    if (currentTemplate) {
      setScore(score + 15);
      setFeedback(
        `Tebrikler! ${currentTemplate.name} molekülünü doğru oluşturdunuz.`
      );
      setCurrentMolecule(currentTemplate);
    } else {
      setFeedback("Molekül doğru oluşturulmadı. Tekrar deneyin.");
      setCurrentMolecule(null);
    }

    setSelectedElements([]);
  };

  const resetGame = (): void => {
    setSelectedElements([]);
    setCurrentMolecule(null);
    setFeedback("");
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-5 text-center ">
      <div className="flex flex-col justify-center items-center gap-5">
        {" "}
        <DescriptionCard title="Lewis Yapıları Molekül Oluşturma Oyunu" />
        <Card className=" flex flex-row justify-center items-center p-2 px-5 gap-2">
          {/* <CardHeader className="p-0 m-0">
          <CardTitle className="text-start">Puan: {score}</CardTitle>
        </CardHeader> */}
          <CardContent className="p-0 m-0">
            <p className="text-sm text-gray-600">
              {feedback
                ? feedback
                : "Elementlere yeterli miktarda tıklayarak molekülü oluşturun."}
            </p>
          </CardContent>
          <CardFooter className="p-0 m-0">
            {" "}
            <Button
              size="lg"
              onClick={resetGame}
              className="bg-yellow-500 text-white hover:bg-yellow-600"
            >
              Sıfırla
            </Button>
          </CardFooter>
        </Card>
        <div className="w-full max-w-3xl flex flex-wrap justify-center items-center gap-3 mb-5">
          {elements.map((element) => (
            <Button
              key={element.symbol}
              variant="outline"
              size="lg"
              onClick={() => handleElementSelect(element)}
              className={cn(
                "h-26 flex sm:flex-col w-full sm:w-auto items-center justify-center",
                element.color
              )}
            >
              <span className="font-bold text-xl">{element.symbol}</span>
              <span className="text-sm">{element.name}</span>
              <span className="text-xs">
                Valans: {element.valenceElectrons}
              </span>
            </Button>
          ))}
        </div>
        <Button size="lg" onClick={checkLewisStructure}>
          Molekül Oluştur
        </Button>
      </div>
      <div className="w-full max-w-3xl min-w-96 flex justify-center gap-2">
        <Card className="min-h-96 w-1/2">
          <CardHeader>
            <CardTitle>Seçilen Elementler</CardTitle>
          </CardHeader>
          <CardContent>
            {" "}
            {selectedElements.map((element, index) => (
              <div key={index} className={`${element.color} mb-2 p-2 rounded`}>
                {element.symbol} - {element.name}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex flex-col space-y-4 w-1/2 h-100">
          <Card className="bg-blue-100 border border-blue-300 shadow-md h-full">
            {currentMolecule && (
              <>
                <CardHeader>
                  <CardTitle className="text-blue-800">
                    {currentMolecule.name} Molekülü
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-900 mb-2">
                    {currentMolecule.description}
                  </p>

                  <div className="mb-2">
                    <h5 className="font-semibold text-blue-800">
                      Lewis Yapısı:
                    </h5>
                    <div className="bg-white overflow-hidden flex items-center justify-center p-2 rounded font-mono text-sm whitespace-pre border border-blue-300">
                      <Image
                        className="w-100 h-auto"
                        src={currentMolecule?.lewisStructure}
                        width="120"
                        height="80"
                        alt="lewis-structure-img"
                      />
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-blue-800">
                      Molekül Geometrisi
                    </h5>
                    <p className="text-sm text-blue-900">
                      {currentMolecule.moleculeGeometry}
                    </p>
                    <p className="text-xs text-blue-700">
                      {currentMolecule.geometryDetails}
                    </p>
                  </div>

                  <p className="text-xs mt-2 font-bold text-blue-900">
                    Formül: {currentMolecule.formula}
                  </p>
                </CardContent>{" "}
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LewisStructureGame;
