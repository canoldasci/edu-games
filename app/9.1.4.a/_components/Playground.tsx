"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "../../../components/ui/dialog";
import Image from "next/image";
import { orbitalsData } from "@/constants";
// Örnek orbital verisi

const Playground = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader className="my-5">
          <CardTitle className="text-3xl">
            Elektron Orbitalleri: Keşfet, Öğren
          </CardTitle>
          <CardDescription className="text-lg font-semibold text-emerald-700">
            Amaç: Öğrencilerin orbitallerin şekilleri, özellikleri ve
            kapasiteleri hakkında bilgi edinmesi.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Orbital</strong>, bir elektronun bir atom çevresinde
              bulunma olasılığının en yüksek olduğu bölgeleri tanımlar.
            </li>
            <li>
              Kuantum mekaniğinde, orbitaller{" "}
              <strong>şekil, enerji seviyesi ve kapasite</strong>
              bakımından farklılık gösterir.
            </li>
            <li>
              <strong>Baş kuantum sayısı (n)</strong> orbitallerin enerji
              seviyelerini ve büyüklüğünü belirlerken,{" "}
              <strong> yan kuantum sayısı (l)</strong> orbitallerin şekillerini
              belirler.
            </li>
            <li>
              <strong>s</strong>, <strong>p</strong> ve <strong>d</strong>{" "}
              orbitalleri, atomların elektronlarının bulunduğu enerji
              seviyelerinde yer alan ve belirli şekillere sahip olan
              bölgelerdir.
            </li>
            <li>
              Bu orbitallerin her birinin özellikleri, elektronu yerleştirme ve
              atomun kimyasal özelliklerini anlama açısından oldukça önemlidir.
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5 mb-10">
        {orbitalsData.map((orbital) => (
          <Dialog key={orbital.id}>
            <DialogTrigger asChild>
              <Card className="p-4 group hover:scale-110 transition overflow-hidden flex flex-col items-center justify-between cursor-pointer bg-blue-50 hover:bg-blue-100">
                <div className="">
                  <Image
                    src={orbital.image}
                    alt={orbital.name}
                    width={600}
                    height={150}
                    className="mx-auto w-100"
                  />{" "}
                </div>
                <div className="text-lg font-semibold">{orbital.name}</div>
              </Card>
            </DialogTrigger>
            <DialogContent className="bg-white max-w-[95vw] max-h-[75vh] sm:max-w-[600px] w-full mx-2 overflow-y-auto">
              <DialogTitle className="text-2xl font-bold text-center mb-4">
                {orbital.name}
              </DialogTitle>
              <div className="space-y-4">
                {/* Image Section */}
                <div className="flex justify-center">
                  <Image
                    src={orbital.image}
                    alt={orbital.name}
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>

                {/* Shape Section */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Şekil:</h3>
                  <p>{orbital.shape}</p>
                </div>

                {/* Energy Levels Section */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    Bulunduğu Enerji Seviyeleri:
                  </h3>
                  <p>{orbital.energyLevels}</p>
                </div>

                {/* Electron Capacity Section */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    Elektron Kapasitesi:
                  </h3>
                  <p>{orbital.electronCapacity}</p>
                </div>

                {/* Properties Section */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Özellikler:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    {orbital.specialties.map((specialty, index) => (
                      <li key={index}>{specialty}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button">Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Playground;
