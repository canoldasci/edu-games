"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../../components/ui/dialog";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Örnek orbital verisi
const orbitalsData = [
  {
    id: "s",
    name: "S Orbital",
    description: "S orbital, 1 elektron kabuğuna sahip en basit orbittir.",
    image: "/s_orbital.svg",
  },
  {
    id: "p",
    name: "P Orbital",
    description:
      "P orbital, 3 farklı yönde uzanabilir ve 6 elektrona sahiptir.",
    image: "/images/p_orbital.svg",
  },
  {
    id: "d",
    name: "D Orbital",
    description: "D orbital, 5 farklı yönü vardır ve 10 elektrona sahiptir.",
    image: "/images/d_orbital.svg",
  },
  {
    id: "f",
    name: "F Orbital",
    description: "F orbital, 7 farklı yönü vardır ve 14 elektrona sahiptir.",
    image: "/images/f_orbital.svg",
  },
];

const OrbitalsInfo = () => {
  const [selectedOrbital, setSelectedOrbital] = useState<null | {
    name: string;
    description: string;
    image: string;
  }>(null);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <section className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold text-primary-200"
        >
          Elektron Orbitalleri: Keşfet, Öğren
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg text-content-300"
        >
          Amaç: Öğrencilerin orbitallerin şekilleri, özellikleri ve kapasiteleri
          hakkında bilgi edinmesi.
        </motion.p>
      </section>
      <section className="text-content-300 mt-8">
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Orbital</strong>, bir elektronun bir atom çevresinde bulunma
            olasılığının en yüksek olduğu bölgeleri tanımlar.
          </li>
          <li>
            Kuantum mekaniğinde, orbitaller şekil, enerji seviyesi ve kapasite
            bakımından farklılık gösterir.
          </li>
          <li>
            Baş kuantum sayısı <strong>(n)</strong> orbitallerin enerji
            seviyelerini ve büyüklüğünü belirlerken, yan kuantum sayısı{" "}
            <strong>(l)</strong> orbitallerin şekillerini belirler.
          </li>
          <li>
            <strong>s</strong>, <strong>p</strong> ve <strong>d</strong>{" "}
            orbitalleri, atomların elektronlarının bulunduğu enerji
            seviyelerinde yer alan ve belirli şekillere sahip olan bölgelerdir.
          </li>
          <li>
            Bu orbitallerin her birinin özellikleri, elektronu yerleştirme ve
            atomun kimyasal özelliklerini anlama açısından oldukça önemlidir.
          </li>
        </ul>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-5">
        {orbitalsData.map((orbital) => (
          <motion.div
            key={orbital.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="p-4 cursor-pointer bg-blue-100 hover:bg-blue-200 transition-colors">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="text-center">
                    <Image
                      src={orbital.image}
                      alt={orbital.name}
                      width={100}
                      height={100}
                      className="mx-auto"
                    />
                    <div className="text-lg font-semibold">{orbital.name}</div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] max-h-[750vh] sm:max-w-[600px] w-full mx-2 overflow-y-auto">
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
                      <p>
                        Küresel simetrik bir yapıya sahiptir. Elektronlar
                        çekirdek etrafında eşit olasılıkla bulunabilir.
                      </p>
                    </div>

                    {/* Energy Levels Section */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">
                        Bulunduğu Enerji Seviyeleri:
                      </h3>
                      <p>
                        Her enerji seviyesinde bir adet s orbitali bulunur
                        (örneğin 1s, 2s, 3s…).
                      </p>
                    </div>

                    {/* Electron Capacity Section */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">
                        Elektron Kapasitesi:
                      </h3>
                      <p>
                        Her bir s orbitali en fazla 2 elektron barındırabilir.
                      </p>
                    </div>

                    {/* Properties Section */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Özellikler:</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Çekirdeğe en yakın orbitaldir (1s).</li>
                        <li>
                          Elektron yoğunluğu çekirdek etrafında maksimumdur.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Close Button */}
                  <Button
                    onClick={() => setSelectedOrbital(null)}
                    className="mt-4 w-full sm:w-auto"
                  >
                    Kapat
                  </Button>
                </DialogContent>
              </Dialog>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedOrbital && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-6 rounded-lg max-w-sm"
            >
              <h2 className="text-xl font-bold">{selectedOrbital.name}</h2>
              <p className="mt-2">{selectedOrbital.description}</p>
              <Button onClick={() => setSelectedOrbital(null)} className="mt-4">
                Kapat
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrbitalsInfo;
