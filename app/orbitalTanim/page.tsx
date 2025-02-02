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
} from "../../components/ui/dialog";
import Image from "next/image";

// Örnek orbital verisi
const orbitalsData = [
  {
    id: "s",
    name: "S Orbital",
    shape:
      "Küresel simetrik bir yapıya sahiptir. Elektronlar çekirdek etrafında eşit olasılıkla bulunabilir.",
    energyLevels:
      "Her enerji seviyesinde bir adet s orbitali bulunur (örneğin 1s, 2s, 3s…).",
    electronCapacity: "Her bir s orbitali en fazla 2 elektron barındırabilir.",
    specialties: [
      "Çekirdeğe en yakın orbitaldir (1s).",
      "Elektron yoğunluğu çekirdek etrafında maksimumdur.",
    ],
    image: "/s-orbital.jpeg",
  },
  {
    id: "p",
    name: "P Orbitalleri",
    shape:
      "Çift loblu ve dambıl (halter) şeklindedir. Loblar arasında nodal bir düzlem bulunur (elektronun bulunma ihtimali sıfır olan bölge).",
    energyLevels: "2. enerji seviyesinden itibaren bulunur (2p, 3p, 4p…).",
    electronCapacity:
      "Bir enerji seviyesinde 3 farklı p orbitali (px, py, pz) vardır ve her biri 2 elektron alabilir. Toplamda 6 elektron taşır.",
    specialties: [
      "p orbitalleri x, y ve z eksenlerinde yerleşir.",
      "Şekilleri ve yönelimleri, kimyasal bağ oluşumunda büyük rol oynar (örneğin kovalent bağlarda).",
    ],
    image: "/p-orbitals.jpeg",
  },
  {
    id: "d",
    name: "D Orbitalleri",
    shape:
      "Daha karmaşık bir yapıdadır. Çoğunlukla yonca yaprağına benzer şekiller gösterir. (Bazıları halkalıdır, örn: dz²).",
    energyLevels: "3. enerji seviyesinden itibaren bulunur (3d, 4d, 5d…).",
    electronCapacity:
      "Bir enerji seviyesinde 5 farklı d orbitali bulunur ve her biri 2 elektron alabilir. Toplamda 10 elektron taşır.",
    specialties: [
      "d orbitalleri geçiş metalleri gibi elementlerin kimyasal özelliklerini ve renklerini belirler.",
      "d orbitallerindeki elektronlar genellikle metal komplekslerinde bağ yapımında rol oynar.",
    ],
    image: "/d-orbitals.jpeg",
  },
  {
    id: "f",
    name: "F Orbital",
    shape:
      "Çok daha karmaşık ve simetrik olmayan bir yapıya sahiptir. Şekillerini görselleştirmek zordur.",
    energyLevels: "4. enerji seviyesinden itibaren bulunur (4f, 5f…).",
    electronCapacity:
      "Bir enerji seviyesinde 7 farklı f orbitali bulunur ve her biri 2 elektron alabilir. Toplamda 14 elektron taşır.",
    specialties: [
      "f orbitalleri lantanidler ve aktinitler gibi elementlerde görülür.",
      "Elektronların f orbitallerine yerleşimi, bu elementlerin manyetik ve kimyasal özelliklerini etkiler.",
    ],
    image: "/f-orbitals.jpeg",
  },
];

const OrbitalsInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 my-10">
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
              <Card className="p-4 group hover:scale-110 transition overflow-hidden flex flex-col items-center justify-between cursor-pointer bg-blue-100 hover:bg-blue-200">
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
            <DialogContent className="max-w-[95vw] max-h-[75vh] sm:max-w-[600px] w-full mx-2 overflow-y-auto">
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

export default OrbitalsInfo;
