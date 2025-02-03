import { elements } from "../../constants/periodicTable";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

const PeriodicTable = () => {
  // Element kategorilerine göre renkler
  const categoryColors: { [key: string]: string } = {
    "alkali metal": "bg-red-500",
    "toprak alkali metal": "bg-orange-500",
    "azot grubu": "bg-yellow-500",
    "karbon grubu": "bg-green-500",
    "bor grubu": "bg-blue-500",
    kalkojen: "bg-indigo-500",
    halojen: "bg-purple-500",
    soygaz: "bg-pink-500",
    "geçiş metali": "bg-teal-500",
    lantanit: "bg-slate-400",
    aktinit: "bg-slate-500",
  };

  return (
    <div>
      {/* Periyodik tablo */}
      <div className="grid grid-cols-18 gap-2 p-4 w-100">
        {elements.map((el) => (
          <HoverCard key={el.atomicNumber}>
            <HoverCardTrigger asChild>
              <Button
                className={`relative w-100 min-h-16 flex-col  p-2 border rounded-md text-center cursor-pointer ${
                  categoryColors[el.category || el.metalNonmetal] ||
                  "bg-slate-400"
                }`}
                style={{
                  gridColumn: el.position,
                  gridRow: el.period,
                }}
              >
                <p className="text-sm font-bold">{el.atomicNumber}</p>
                <p className="text-lg font-extrabold">{el.symbol}</p>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="text-sm overflow-y-auto h-64">
              <h3 className="font-bold mb-2">Elementin Temel Bilgileri:</h3>
              <p>
                <strong>Adı:</strong> {el.name}
              </p>
              <p>
                <strong>Sembolü:</strong> {el.symbol}
              </p>
              <p>
                <strong>Atom Numarası:</strong> {el.atomicNumber}
              </p>
              <p>
                <strong>Atom Kütlesi:</strong> {el.atomicMass} g/mol
              </p>

              <h3 className="font-bold mt-4 mb-2">
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

              <h3 className="font-bold mt-4 mb-2">Fiziksel Özellikler:</h3>
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

              <h3 className="font-bold mt-4 mb-2">Kimyasal Özellikler:</h3>
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
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
      {/* Kategori renklerini gösteren alan */}
      <div className="flex flex-wrap gap-4 p-4 ">
        {Object.entries(categoryColors).map(([category, color]) => (
          <div key={category} className="flex items-center space-x-2">
            <div className={`w-6 h-6 rounde ${color}`} />
            <span>{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeriodicTable;
