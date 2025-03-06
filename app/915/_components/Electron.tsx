"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import DescriptionCard from "@/app/_components/DescriptionCard";

// Farklı zorluk seviyelerindeki elementler
const elementler = {
  kolay: [
    {
      atomNumarasi: 1,
      sembol: "H",
      ad: "Hidrojen",
      dogruDizilim: "1s¹",
    },
    {
      atomNumarasi: 2,
      sembol: "He",
      ad: "Helyum",
      dogruDizilim: "1s²",
    },
    {
      atomNumarasi: 3,
      sembol: "Li",
      ad: "Lityum",
      dogruDizilim: "[He] 2s¹",
    },
    {
      atomNumarasi: 4,
      sembol: "Be",
      ad: "Berilyum",
      dogruDizilim: "[He] 2s²",
    },
    {
      atomNumarasi: 5,
      sembol: "B",
      ad: "Bor",
      dogruDizilim: "[He] 2s² 2p¹",
    },
    {
      atomNumarasi: 7,
      sembol: "N",
      ad: "Azot",
      dogruDizilim: "1s² 2s² 2p³",
    },
    {
      atomNumarasi: 9,
      sembol: "F",
      ad: "Flor",
      dogruDizilim: "1s² 2s² 2p⁵",
    },
    {
      atomNumarasi: 10,
      sembol: "Ne",
      ad: "Neon",
      dogruDizilim: "1s² 2s² 2p⁶",
    },
    {
      atomNumarasi: 12,
      sembol: "Mg",
      ad: "Magnezyum",
      dogruDizilim: "[Ne] 3s²",
    },
    {
      atomNumarasi: 13,
      sembol: "Al",
      ad: "Alüminyum",
      dogruDizilim: "[Ne] 3s² 3p¹",
    },
  ],
  orta: [
    {
      atomNumarasi: 6,
      sembol: "C",
      ad: "Karbon",
      dogruDizilim: "1s² 2s² 2p²",
    },
    {
      atomNumarasi: 11,
      sembol: "Na",
      ad: "Sodyum",
      dogruDizilim: "[Ne] 3s¹",
    },
    {
      atomNumarasi: 8,
      sembol: "O",
      ad: "Oksijen",
      dogruDizilim: "1s² 2s² 2p⁴",
    },
    {
      atomNumarasi: 14,
      sembol: "Si",
      ad: "Silisyum",
      dogruDizilim: "[Ne] 3s² 3p²",
    },
    {
      atomNumarasi: 15,
      sembol: "P",
      ad: "Fosfor",
      dogruDizilim: "[Ne] 3s² 3p³",
    },
    {
      atomNumarasi: 16,
      sembol: "S",
      ad: "Kükürt",
      dogruDizilim: "[Ne] 3s² 3p⁴",
    },
    {
      atomNumarasi: 18,
      sembol: "Ar",
      ad: "Argon",
      dogruDizilim: "[Ne] 3s² 3p⁶",
    },
    {
      atomNumarasi: 20,
      sembol: "Ca",
      ad: "Kalsiyum",
      dogruDizilim: "[Ar] 4s²",
    },
    {
      atomNumarasi: 21,
      sembol: "Sc",
      ad: "Skandiyum",
      dogruDizilim: "[Ar] 3d¹ 4s²",
    },
    {
      atomNumarasi: 22,
      sembol: "Ti",
      ad: "Titanyum",
      dogruDizilim: "[Ar] 3d² 4s²",
    },
  ],
  zor: [
    {
      atomNumarasi: 17,
      sembol: "Cl",
      ad: "Klor",
      dogruDizilim: "[Ne] 3s² 3p⁵",
    },
    {
      atomNumarasi: 19,
      sembol: "K",
      ad: "Potasyum",
      dogruDizilim: "[Ar] 4s¹",
    },
    {
      atomNumarasi: 24,
      sembol: "Cr",
      ad: "Krom",
      dogruDizilim: "[Ar] 3d⁵ 4s¹",
    },
    {
      atomNumarasi: 25,
      sembol: "Mn",
      ad: "Mangan",
      dogruDizilim: "[Ar] 3d⁵ 4s²",
    },
    {
      atomNumarasi: 26,
      sembol: "Fe",
      ad: "Demir",
      dogruDizilim: "[Ar] 3d⁶ 4s²",
    },
    {
      atomNumarasi: 29,
      sembol: "Cu",
      ad: "Bakır",
      dogruDizilim: "[Ar] 3d¹⁰ 4s¹",
    },
    {
      atomNumarasi: 30,
      sembol: "Zn",
      ad: "Çinko",
      dogruDizilim: "[Ar] 3d¹⁰ 4s²",
    },
    {
      atomNumarasi: 34,
      sembol: "Se",
      ad: "Selenyum",
      dogruDizilim: "[Ar] 3d¹⁰ 4s² 4p⁴",
    },
    {
      atomNumarasi: 42,
      sembol: "Mo",
      ad: "Molibden",
      dogruDizilim: "[Kr] 4d⁵ 5s¹",
    },
    {
      atomNumarasi: 47,
      sembol: "Ag",
      ad: "Gümüş",
      dogruDizilim: "[Kr] 4d¹⁰ 5s¹",
    },
  ],
};

type ElementType = {
  atomNumarasi: number;
  sembol: string;
  ad: string;
  dogruDizilim: string;
};

const Electron = () => {
  const [zorlukSeviyesi, setZorlukSeviyesi] = useState<string | null>(null);
  const [secilenElement, setSecilenElement] = useState<ElementType | null>(
    null
  );
  const [kullaniciDizilimi, setKullaniciDizilimi] = useState("");
  const [sonuc, setSonuc] = useState<boolean | null>(null);
  const [puan, setPuan] = useState(0);
  const [dogruCevapSayisi, setDogruCevapSayisi] = useState(0);
  const [oyunAsamasi, setOyunAsamasi] = useState("zorlukSecimi");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [kalanSure, setKalanSure] = useState(60);
  const [timerActive, setTimerActive] = useState(false);
  const [yuksekSkor, setYuksekSkor] = useState(0);

  // Timer etkileri
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && kalanSure > 0) {
      interval = setInterval(() => {
        setKalanSure((prev) => prev - 1);
      }, 1000);
    } else if (kalanSure === 0 && timerActive) {
      setTimerActive(false);
      setIsAlertOpen(true);
    }
    return () => clearInterval(interval);
  }, [timerActive, kalanSure]);

  // Normalize fonksiyonu
  const normalize = (dizilim: string) =>
    dizilim
      .replace(/\s+/g, "")
      .toLowerCase()
      .replace(/(\d+)/g, (match) => {
        const ustIndisler: { [key: string]: string } = {
          "1": "¹",
          "2": "²",
          "3": "³",
          "4": "⁴",
          "5": "⁵",
          "6": "⁶",
          "7": "⁷",
          "8": "⁸",
        };
        return ustIndisler[match] || match;
      });

  const zorlukSec = (seviye: string) => {
    setZorlukSeviyesi(seviye);
    setSecilenElement(null);
    setKullaniciDizilimi("");
    setSonuc(null);
    setPuan(0);
    setDogruCevapSayisi(0);
    setOyunAsamasi("elementSecimi");
    setKalanSure(60);
    setTimerActive(false);
  };

  const elementSec = (element: ElementType) => {
    setSecilenElement(element);
    setKullaniciDizilimi("");
    setSonuc(null);
    setOyunAsamasi("oyunAlani");
    setKalanSure(60);
    setTimerActive(true);
  };

  const kontrolEt = () => {
    if (!secilenElement) return;

    const dogruMu =
      normalize(kullaniciDizilimi) === normalize(secilenElement.dogruDizilim);

    setSonuc(dogruMu);

    if (dogruMu) {
      // Zorluk seviyesine göre farklı puan hesaplaması
      const puanArtisi =
        zorlukSeviyesi === "kolay" ? 1 : zorlukSeviyesi === "orta" ? 2 : 3;
      // Kalan süreye göre bonus puan
      const sureBonus = Math.round(kalanSure / 10);
      const toplamArtis = puanArtisi + sureBonus;

      setPuan((prevPuan) => prevPuan + toplamArtis);
      setDogruCevapSayisi((prev) => prev + 1);

      // Her 3 doğru cevapta bir sonraki aşamaya geç
      if ((dogruCevapSayisi + 1) % 3 === 0) {
        setTimerActive(false);
        setOyunAsamasi("sonrakiAsamaOnay");
      } else {
        // Farklı bir element seç
        const mevcutElementler =
          elementler[zorlukSeviyesi as keyof typeof elementler];
        const yeniElementIndex = Math.floor(
          Math.random() * mevcutElementler.length
        );
        setTimeout(() => {
          setSecilenElement(mevcutElementler[yeniElementIndex]);
          setKullaniciDizilimi("");
          setSonuc(null);
          // Timer'ı yenile
          setKalanSure(60);
        }, 1000); // 10 saniye = 10000 milisaniye
      }
    }
  };

  const sonrakiAsamayaGec = () => {
    // Bir sonraki aşamaya geç
    if (oyunAsamasi === "sonrakiAsamaOnay") {
      if (zorlukSeviyesi === "kolay") {
        setZorlukSeviyesi("orta");
        setOyunAsamasi("elementSecimi");
      } else if (zorlukSeviyesi === "orta") {
        setZorlukSeviyesi("zor");
        setOyunAsamasi("elementSecimi");
      } else {
        // Oyun tamamlandı
        setOyunAsamasi("oyunTamamlandi");
        if (puan > yuksekSkor) {
          setYuksekSkor(puan);
        }
      }

      // Sıfırlamaları yap
      setSecilenElement(null);
      setKullaniciDizilimi("");
      setSonuc(null);
      setDogruCevapSayisi(0);
      setTimerActive(false);
    }
  };

  const renderZorlukSecimi = () => (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Zorluk Seviyesi Seçin</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row justify-content-center items-center gap-5 ">
          {["kolay", "orta", "zor"].map((seviye) => (
            <Button
              key={seviye}
              variant={
                seviye === "kolay"
                  ? "default"
                  : seviye === "orta"
                  ? "default"
                  : "destructive"
              }
              size="lg"
              onClick={() => zorlukSec(seviye)}
              className={`uppercase w-full ${
                seviye === "orta" ? "bg-yellow-500 hover:bg-yellow-500/90" : ""
              }`}
            >
              {seviye} Seviye
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const renderElementSecimi = () => (
    <Card>
      <CardHeader>
        <CardTitle className="text-center mb-5">
          {zorlukSeviyesi?.toUpperCase()} Seviye Elementleri
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap justify-center items-center gap-3 mb-5 ">
          {zorlukSeviyesi &&
            elementler[zorlukSeviyesi as keyof typeof elementler].map(
              (element) => (
                <Button
                  key={element.atomNumarasi}
                  variant="outline"
                  size="sm"
                  onClick={() => elementSec(element)}
                  className={`h-26 flex sm:flex-col items-center justify-center`}
                >
                  <span className="text-3xl font-bold text-primary">
                    {element.sembol}
                  </span>
                  <span className="text-md hidden sm:block">{element.ad}</span>
                  <span className="text-sm hidden sm:block">
                    Atom No: {element.atomNumarasi}
                  </span>
                </Button>
              )
            )}
        </div>
        <Button
          variant="secondary"
          onClick={() => setOyunAsamasi("zorlukSecimi")}
          className="w-full mt-4"
        >
          Zorluk Seviyesini Değiştir
        </Button>
      </CardContent>
    </Card>
  );

  const renderOyunAlani = () => (
    <Card>
      <CardHeader className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <CardTitle>
            {secilenElement?.ad} (Atom No: {secilenElement?.atomNumarasi})
          </CardTitle>
          <div className="space-x-2">
            <Badge variant="outline" className="bg-blue-100">
              Puan: {puan}
            </Badge>
            <Badge
              variant="outline"
              className={`${kalanSure <= 10 ? "bg-red-100" : "bg-green-100"}`}
            >
              Süre: {kalanSure}s
            </Badge>
          </div>
        </div>
        <Progress value={(kalanSure / 60) * 100} />
      </CardHeader>
      <CardContent className="space-y-4 my-5 ">
        <div className="space-y-6 mb-5 ">
          <label className="block mb-2">Elektron Dizilimini Girin:</label>
          <div className="flex gap-2">
            <Input
              value={kullaniciDizilimi}
              onChange={(e) => setKullaniciDizilimi(e.target.value)}
              placeholder="Örn: 1s² 2s² 2p²"
              className="flex-1"
            />
            <Button onClick={kontrolEt} variant="default">
              Kontrol Et
            </Button>
          </div>
        </div>

        {sonuc !== null && (
          <div
            className={`p-3 rounded text-center ${
              sonuc ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {sonuc ? "Tebrikler! Doğru Cevap" : "Yanlış. Tekrar Deneyin"}
          </div>
        )}

        <div className="flex flex-col  justify-center items-center gap-2 text-sm text-muted-foreground">
          <p>
            İpucu: Elektron dizilimini katman ve alt katman kurallarına göre
            yazın.İndis numarası numara girdiğinizde otomatik olarak
            dönüştürülür.
          </p>
          {!sonuc && (
            <p>
              Doğru Dizilim:
              <Button
                variant="link"
                className="p-0 h-auto text-sm font-normal"
                onClick={() =>
                  setKullaniciDizilimi(secilenElement?.dogruDizilim || "")
                }
              >
                Göster
              </Button>
            </p>
          )}
          <p>
            {zorlukSeviyesi === "kolay"
              ? "Basit elementler ve temel dizilimler"
              : zorlukSeviyesi === "orta"
              ? "Biraz daha karmaşık elektron dizilimleri"
              : "En zorlu elektron dizilimleri ve istisna durumlar"}
          </p>
        </div>
      </CardContent>
    </Card>
  );

  const renderSonrakiAsamaOnay = () => (
    <Card className="bg-primary-foreground">
      <CardHeader>
        <CardTitle className="text-center">
          Tebrikler! {zorlukSeviyesi?.toUpperCase()} Seviyeyi Tamamladınız
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="mb-6">
          {zorlukSeviyesi === "kolay"
            ? "Orta seviyeye geçmeye hazır mısınız?"
            : zorlukSeviyesi === "orta"
            ? "Zor seviyeye geçmeye hazır mısınız?"
            : "Oyunu tamamlamaya hazır mısınız?"}
        </p>
        <Button onClick={sonrakiAsamayaGec} size="lg" className="text-lg">
          Sonraki Aşamaya Geç
        </Button>
      </CardContent>
    </Card>
  );

  const renderOyunTamamlandi = () => (
    <Card className="bg-green-100">
      <CardHeader>
        <CardTitle className="text-center text-3xl">
          🎉 Oyun Tamamlandı! 🎉
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-xl mb-2">Toplam Puanınız: {puan}</p>
        <p className="text-lg mb-6">Yüksek Skorunuz: {yuksekSkor}</p>
        <Button
          onClick={() => {
            setOyunAsamasi("zorlukSecimi");
            setZorlukSeviyesi(null);
            setPuan(0);
          }}
          size="lg"
          className="text-lg"
        >
          Yeniden Başla
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex flex-col justify-center items-center gap-5 text-center">
      <DescriptionCard title="Elektron Dizilimi Eğitici Oyunu" />
      <div className="text-center">
        {/* Oyun Aşamaları */}
        {oyunAsamasi === "zorlukSecimi" && renderZorlukSecimi()}
        {oyunAsamasi === "elementSecimi" && renderElementSecimi()}
        {oyunAsamasi === "oyunAlani" && renderOyunAlani()}
        {oyunAsamasi === "sonrakiAsamaOnay" && renderSonrakiAsamaOnay()}
        {oyunAsamasi === "oyunTamamlandi" && renderOyunTamamlandi()}

        {/* Süre Bitti Alert */}
        <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Süre Doldu!</AlertDialogTitle>
              <AlertDialogDescription>
                Maalesef bu soru için süreniz doldu. {puan} puan topladınız.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction
                onClick={() => {
                  setIsAlertOpen(false);
                  if (puan > yuksekSkor) {
                    setYuksekSkor(puan);
                  }
                  setOyunAsamasi("zorlukSecimi");
                  setPuan(0);
                }}
              >
                Tekrar Dene
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Electron;
