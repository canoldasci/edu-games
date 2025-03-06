"use client";

// SurfaceTensionSimulation.tsx
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";
import { liquids, surfaces, interactionResults } from "@/constants/index";
import { Liquid, Surface, SimulationResult } from "@/types";

const Playground = () => {
  const [selectedLiquid, setSelectedLiquid] = useState<Liquid | null>(null);
  const [selectedSurface, setSelectedSurface] = useState<Surface | null>(null);
  const [simulationResult, setSimulationResult] =
    useState<SimulationResult | null>(null);
  const [activeTab, setActiveTab] = useState("simulation");

  const handleLiquidSelect = (value: string) => {
    const liquid = liquids.find((l) => l.name === value) || null;
    setSelectedLiquid(liquid);
  };

  const handleSurfaceSelect = (value: string) => {
    const surface = surfaces.find((s) => s.name === value) || null;
    setSelectedSurface(surface);
  };

  const runSimulation = () => {
    if (selectedLiquid && selectedSurface) {
      // Mapping'den sonuç almak
      const mappedResult =
        interactionResults[selectedLiquid.name]?.[selectedSurface.name];

      // Sonuç varsa kullan, yoksa varsayılan değerler kullan
      const result: SimulationResult = mappedResult || {
        meniscusType: "Bilinmiyor",
        capillaryEffect: "Bilinmiyor",
        dropletShape: "Bilinmiyor",
      };

      setSimulationResult(result);
      setActiveTab("results");
    }
  };

  const resetSimulation = () => {
    setSelectedLiquid(null);
    setSelectedSurface(null);
    setSimulationResult(null);
    setActiveTab("simulation");
  };

  return (
    <div className="p-6 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Sıvıların Yüzey Özellikleri Simülasyonu
      </h1>

      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-center">
            Yüzey Gerilimi Deney Laboratuvarı
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Tabs
            defaultValue="simulation"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="simulation">Simülasyon</TabsTrigger>
              <TabsTrigger value="results" disabled={!simulationResult}>
                Sonuçlar
              </TabsTrigger>
            </TabsList>

            <TabsContent value="simulation">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Sıvı Seçimi */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Sıvı Seç</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select onValueChange={handleLiquidSelect}>
                      <SelectTrigger>
                        <SelectValue placeholder="Bir sıvı seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        {liquids &&
                          liquids.map((liquid) => (
                            <SelectItem key={liquid.name} value={liquid.name}>
                              <span className={`font-medium ${liquid.color}`}>
                                {liquid.name}
                              </span>
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>

                    {selectedLiquid && (
                      <div className="mt-4 p-4 bg-slate-50 rounded-md">
                        <Badge variant="outline">
                          {selectedLiquid.wettability}
                        </Badge>
                        <p className="mt-2 text-sm">
                          {selectedLiquid.description}
                        </p>
                        <p className="mt-1 text-sm font-medium">
                          Yüzey Gerilimi: {selectedLiquid.surfaceTension} mN/m
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Yüzey Seçimi */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Yüzey Seç</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select onValueChange={handleSurfaceSelect}>
                      <SelectTrigger>
                        <SelectValue placeholder="Bir yüzey seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        {surfaces.map((surface) => (
                          <SelectItem key={surface.name} value={surface.name}>
                            <span className={`font-medium ${surface.color}`}>
                              {surface.name}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {selectedSurface && (
                      <div className="mt-4 p-4 bg-slate-50 rounded-md">
                        <Badge variant="outline">{selectedSurface.type}</Badge>
                        <p className="mt-2 text-sm">
                          {selectedSurface.description}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Simülasyon Kontrol Butonları */}
              <div className="flex justify-center space-x-4 mt-8">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>
                        <Button
                          onClick={runSimulation}
                          disabled={!selectedLiquid || !selectedSurface}
                          size="lg"
                        >
                          Simülasyonu Çalıştır
                        </Button>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-blue-50 text-blue-500 text-md">
                      <p>
                        Seçilen sıvı ve yüzey arasındaki etkileşimi görmek için
                        tıklayın
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Button onClick={resetSimulation} variant="outline" size="lg">
                  Sıfırla
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="results">
              {simulationResult && selectedLiquid && selectedSurface && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {selectedLiquid?.name} + {selectedSurface?.name}{" "}
                      Etkileşimi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-bold mb-2">Menisküs Tipi</h3>
                        <p className="text-lg">
                          {simulationResult?.meniscusType}
                        </p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-bold mb-2">Kılcallık Etkisi</h3>
                        <p className="text-lg">
                          {simulationResult?.capillaryEffect}
                        </p>
                      </div>

                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h3 className="font-bold mb-2">Damla Şekli</h3>
                        <p className="text-lg">
                          {simulationResult.dropletShape}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="border p-4 rounded-lg">
                        <h3 className="font-bold mb-2">Seçilen Sıvı</h3>
                        <Badge
                          className={clsx(selectedLiquid?.color)}
                          variant="secondary"
                        >
                          {selectedLiquid?.name}
                        </Badge>
                        <p className="mt-2 text-sm">
                          Yüzey Gerilimi: {selectedLiquid.surfaceTension} mN/m
                        </p>
                        <p className="mt-2 text-sm">
                          Islatma Özelliği: {selectedLiquid.wettability}
                        </p>
                        <p className="mt-2 text-sm">
                          {selectedLiquid?.description}
                        </p>
                      </div>

                      <div className="border p-4 rounded-lg">
                        <h3 className="font-bold mb-2">Seçilen Yüzey</h3>
                        <Badge
                          className={clsx(selectedSurface?.color)}
                          variant="outline"
                        >
                          {selectedSurface?.name}
                        </Badge>
                        <p className="mt-2 text-sm">
                          Tür: {selectedSurface?.type}
                        </p>
                        <p className="mt-2 text-sm">
                          {selectedSurface?.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center mt-8">
                      <Button
                        onClick={() => setActiveTab("simulation")}
                        variant="outline"
                      >
                        Simülasyona Dön
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Playground;
