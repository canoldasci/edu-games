"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ElementData {
  name: string;
  initialConfig: string;
  newConfig: string;
  changingValue: string;
  ionInformation: string;
}

const elements: ElementData[] = [
  {
    name: "Na (Sodyum)",
    initialConfig: "1s² 2s² 2p⁶ 3s¹",
    newConfig: "1s² 2s² 2p⁶",
    changingValue: "3s¹",
    ionInformation:
      "3s orbitalindeki 1 elektronu vererek Na⁺ katyonu oluşturur.",
  },
  {
    name: "Cl (Klor)",
    initialConfig: "1s² 2s² 2p⁶ 3s² 3p⁵",
    newConfig: "1s² 2s² 2p⁶ 3s² 3p⁶",
    changingValue: "3p⁵",
    ionInformation: "3p orbitaline 1 elektron alarak Cl⁻ anyonu oluşturur.",
  },
  {
    name: "Mg (Magnezyum)",
    initialConfig: "1s² 2s² 2p⁶ 3s²",
    newConfig: "1s² 2s² 2p⁶",
    changingValue: "3s²",
    ionInformation:
      "3s orbitalindeki 2 elektronu vererek Mg²⁺ katyonu oluşturur.",
  },
  {
    name: "O (Oksijen)",
    initialConfig: "1s² 2s² 2p⁴",
    newConfig: "1s² 2s² 2p⁶",
    changingValue: "2p⁴",
    ionInformation: "2p orbitaline 2 elektron alarak O²⁻ anyonu oluşturur.",
  },
];

export default function ElectronTable() {
  const [changedElements, setChangedElements] = useState<string[]>([]);
  const [configs, setConfigs] = useState<Record<string, string>>(
    Object.fromEntries(elements.map((el) => [el.name, el.initialConfig]))
  );
  const [activeIonInfo, setActiveIonInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [animateElements, setAnimateElements] = useState(true);

  useEffect(() => {
    setTimeout(() => setAnimateElements(false), 1000); // İlk giriş animasyonu
  }, []);

  const handleClick = (element: ElementData) => {
    if (!changedElements.includes(element.name)) {
      setChangedElements((prev) => [...prev, element.name]);
    }
    setActiveIonInfo(null);
    setLoading(true);

    setTimeout(() => {
      setConfigs((prev) => ({
        ...prev,
        [element.name]: element.newConfig,
      }));

      setTimeout(() => {
        setActiveIonInfo(element.ionInformation);
        setLoading(false);
      }, 500);
    }, 2000);
  };

  const resetTable = () => {
    setChangedElements([]);
    setActiveIonInfo(null);
    setConfigs(
      Object.fromEntries(elements.map((el) => [el.name, el.initialConfig]))
    );
  };

  return (
    <div className="flex flex-col items-center p-6">
      {/* Açıklama Metni */}
      <h2 className="text-lg text-gray-700 mb-4">
        Aşağıdaki elementlerden birine tıklayın ve iyon oluşum sürecini görün!
      </h2>

      {/* Tablo ve İyon Bilgisi Alanı */}
      <div className="w-full max-w-4xl flex flex-col-reverse sm:flex-row gap-8">
        {/* Elektron Dizilim Tablosu */}
        <table className="flex-1 border border-gray-300 text-center bg-white shadow-lg rounded-lg">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="p-4 border border-gray-300">Element</th>
              <th className="p-4 border border-gray-300">Elektron Dizilimi</th>
            </tr>
          </thead>
          <tbody>
            {elements.map((element) => (
              <tr
                key={element.name}
                className={cn(
                  "hover:bg-blue-50 transition",
                  changedElements.includes(element.name) ? "bg-blue-200" : ""
                )}
              >
                {/* Element Butonu */}
                <td className="p-4 border border-gray-300">
                  <Button
                    className={cn(
                      "text-lg font-semibold px-4 py-2 transition rounded-md",
                      animateElements ? "scale-110" : "",
                      changedElements.includes(element.name)
                        ? "bg-blue-700 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    )}
                    onClick={() => handleClick(element)}
                  >
                    {element.name}
                  </Button>
                </td>

                {/* Elektron Dizilimi */}
                <td className="p-4 border border-gray-300 font-mono text-gray-700">
                  {configs[element.name].split(" ").map((part, index) => (
                    <span
                      key={index}
                      className={cn(
                        "transition-all duration-500",
                        changedElements.includes(element.name) &&
                          part === element.changingValue
                          ? "text-blue-500 font-bold scale-125"
                          : ""
                      )}
                    >
                      {part}{" "}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* İyon Bilgisi Kutusu */}
        <div className="w-72 p-6 bg-white shadow-lg rounded-lg border border-gray-300 transition-all duration-500">
          <h2 className="text-xl font-bold text-gray-700 mb-4">İyon Bilgisi</h2>

          {/* Loading Animasyonu */}
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
            </div>
          ) : (
            <p
              className={cn(
                "text-blue-600 text-lg font-semibold transition-opacity duration-500",
                activeIonInfo ? "opacity-100" : "opacity-50"
              )}
            >
              {activeIonInfo || "Lütfen bir element seçin."}
            </p>
          )}
        </div>
      </div>

      {/* Sıfırla Butonu */}
      <Button
        className="mt-6 px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
        onClick={resetTable}
      >
        Sıfırla 🔄
      </Button>
    </div>
  );
}
