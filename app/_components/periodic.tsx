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

  return (
    <div className="grid grid-cols-18 gap-2 p-4 bg-background text-foreground">
      {elements.map((el) => (
        <HoverCard key={el.atomicNumber}>
          <HoverCardTrigger asChild>
            <Button
              className={`relative w-100 h-16 p-2 border rounded-md text-center cursor-pointer ${
                categoryColors[el.metalNonmetal] || "bg-gray-200"
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
          <HoverCardContent className="w-40 text-sm">
            <p className="font-bold">{el.name}</p>
            <p>Ağırlık: {el.atomicMass}</p>
            <p>Kategori: {el.metalNonmetal}</p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};

export default PeriodicTable;
