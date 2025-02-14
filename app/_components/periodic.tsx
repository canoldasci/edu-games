import { elements } from "../../constants/periodicTable";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const PeriodicTable = () => {
  // Element kategorilerine göre renkler
  const categoryColors: { [key: string]: string } = {
    "Yarı metal": "bg-red-500",
    Soygaz: "bg-orange-500",
    Ametal: "bg-yellow-500",
    Metal: "bg-green-500",
  };

  return (
    <div className="overflow-x-auto w-screen lg:w-auto">
      {/* Periyodik tablo */}
      <div className="grid grid-cols-18 gap-2 p-4">
        {elements.map((el) => (
          <Dialog key={el.atomicNumber}>
            <DialogTrigger asChild>
              <Button
                className={`relative w-100 min-h-16 flex-col p-2 border rounded-md text-center cursor-pointer ${
                  categoryColors[el.metalNonmetal] || "bg-slate-400"
                }`}
                style={{
                  gridColumn: el.position,
                  gridRow: el.period,
                }}
              >
                <p className="text-sm font-bold">{el.atomicNumber}</p>
                <p className="text-lg font-extrabold">{el.symbol}</p>
              </Button>
            </DialogTrigger>
            <DialogContent className="text-sm bg-white md:max-w-md overflow-y-auto max-h-screen ">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-center">
                  {el.name} ({el.symbol})
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">
                  Elementin Temel Bilgileri:
                </h3>
                <p>
                  <strong>Atom Numarası:</strong> {el.atomicNumber}
                </p>
                <p>
                  <strong>Atom Kütlesi:</strong> {el.atomicMass} g/mol
                </p>

                <h3 className="text-lg font-bold mt-4 mb-2">
                  Periyodik Tablo Özellikleri:
                </h3>
                <p>
                  <strong>Grubu:</strong> {el.group}
                </p>
                <p>
                  <strong>Periyodu:</strong> {el.period}
                </p>
                <p>
                  <strong>Bloku:</strong> {el.block}
                </p>
                <p>
                  <strong>Metal/Ametal:</strong> {el.metalNonmetal}
                </p>

                <h3 className="text-lg font-bold mt-4 mb-2">
                  Fiziksel Özellikler:
                </h3>
                <p>
                  <strong>Fazı:</strong> {el.phase}
                </p>
                <p>
                  <strong>Renk:</strong> {el.color}
                </p>
                <p>
                  <strong>Yoğunluk:</strong> {el.density}
                </p>
                <p>
                  <strong>Erime Noktası:</strong> {el.meltingPoint}
                </p>
                <p>
                  <strong>Kaynama Noktası:</strong> {el.boilingPoint}
                </p>

                <h3 className="text-lg font-bold mt-4 mb-2">
                  Kimyasal Özellikler:
                </h3>
                <p>
                  <strong>Elektron Dizilimi:</strong> {el.electronConfiguration}
                </p>
                <p>
                  <strong>Elektronegatiflik:</strong> {el.electronegativity}
                </p>
                <p>
                  <strong>İyonlaşma Enerjisi:</strong> {el.ionizationEnergy}
                </p>
                <p>
                  <strong>Bağ Yapma Durumu:</strong> {el.bonding}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {/* Kategori renklerini gösteren alan */}
      <div className="flex flex-wrap gap-4 p-4">
        {Object.entries(categoryColors).map(([category, color]) => (
          <div key={category} className="flex items-center space-x-2">
            <div className={`w-6 h-6 rounded ${color}`} />
            <span>{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeriodicTable;
