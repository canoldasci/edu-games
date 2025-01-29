"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { elements } from "../../constants/index";
import { Element } from "../../types/index";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  // Element kategorilerine göre renkler
  const categoryColors: { [key: string]: string } = {
    "Alkali Metal": "bg-red-200",
    "Alkaline Earth Metal": "bg-orange-200",
    "Transition Metal": "bg-yellow-200",
    "Post-Transition Metal": "bg-green-200",
    Metalloid: "bg-blue-200",
    Nonmetal: "bg-indigo-200",
    "Noble Gas": "bg-purple-200",
    Lanthanide: "bg-pink-200",
    Actinide: "bg-teal-200",
  };

  // Periyodik tablo düzeni
  const periodicTableLayout = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], // 1. Periyot
    [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10], // 2. Periyot
    [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18], // 3. Periyot
    [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], // 4. Periyot
    [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54], // 5. Periyot
    [55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72], // 6. Periyot
    [73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90], // 7. Periyot
  ];

  // Elementleri atomicNumber'a göre haritala
  const elementMap = new Map<number, Element>();
  elements.forEach((element) => {
    elementMap.set(element.atomicNumber, element);
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Periyodik Tablo</h1>

      {/* Ana Periyodik Tablo */}
      <div className="grid grid-cols-18 gap-1 max-w-6xl mx-auto">
        {periodicTableLayout.map((row, rowIndex) =>
          row.map((atomicNumber, colIndex) => {
            const element = elementMap.get(atomicNumber);
            return element ? (
              <Card
                key={element.atomicNumber}
                className={`p-2 text-center cursor-pointer hover:shadow-lg transition-shadow ${
                  categoryColors[element.category] || "bg-gray-200"
                }`}
                onClick={() => setSelectedElement(element)}
              >
                <CardContent className="p-1">
                  <div className="text-sm font-bold">
                    {element.atomicNumber}
                  </div>
                  <div className="text-lg font-bold">{element.symbol}</div>
                  <div className="text-xs">{element.name}</div>
                </CardContent>
              </Card>
            ) : (
              <div key={`${rowIndex}-${colIndex}`} className="p-2"></div>
            );
          })
        )}
      </div>

      {/* Lantanitler ve Aktinitler */}
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Lantanitler ve Aktinitler</h2>
        <div className="grid grid-cols-15 gap-1 max-w-6xl mx-auto">
          {elements
            .filter(
              (element) =>
                element.category === "Lanthanide" ||
                element.category === "Actinide"
            )
            .map((element) => (
              <Card
                key={element.atomicNumber}
                className={`p-2 text-center cursor-pointer hover:shadow-lg transition-shadow ${
                  categoryColors[element.category] || "bg-gray-200"
                }`}
                onClick={() => setSelectedElement(element)}
              >
                <CardContent className="p-1">
                  <div className="text-sm font-bold">
                    {element.atomicNumber}
                  </div>
                  <div className="text-lg font-bold">{element.symbol}</div>
                  <div className="text-xs">{element.name}</div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* Element Bilgi Ekranı */}
      <Dialog
        open={!!selectedElement}
        onOpenChange={(open) => !open && setSelectedElement(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedElement?.name}</DialogTitle>
          </DialogHeader>
          {selectedElement && (
            <div className="space-y-2">
              <p>
                <strong>Sembol:</strong> {selectedElement.symbol}
              </p>
              <p>
                <strong>Atom Numarası:</strong> {selectedElement.atomicNumber}
              </p>
              <p>
                <strong>Atom Kütlesi:</strong> {selectedElement.atomicMass}
              </p>
              <p>
                <strong>Kategori:</strong> {selectedElement.category}
              </p>
              <p>
                <strong>Elektron Dizilimi:</strong>{" "}
                {selectedElement.electronConfiguration}
              </p>
              <p>
                <strong>Keşif Yılı:</strong> {selectedElement.discoveredYear}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PeriodicTable;
