import { Button } from "@/components/ui/button";

interface ValueSelectorProps<T extends string | number> {
  title: string; // Başlık (örneğin: "Sıcaklık" veya "Basınç")
  values: T[];
  selectedIndex: number; // Seçili değerin indeksi
  onChange: (index: number) => void; // Değer değiştiğinde çağrılacak fonksiyon
  unit?: string; // Birim (örneğin: "°C" veya "Pa")
}
const ValueSelector = <T extends string | number>({
  title,
  values,
  selectedIndex,
  onChange,
  unit = "",
}: ValueSelectorProps<T>) => {
  return (
    <div className="flex flex-col items-center space-y-4 flex-wrap">
      <h2 className="text-xl font-semibold">
        {title}: {values[selectedIndex]}
        {unit}
      </h2>
      <div className="flex justify-center items-center space-x-2 flex-wrap">
        {values.map((value, index) => (
          <Button
            key={value}
            onClick={() => onChange(index)}
            variant={selectedIndex === index ? "default" : "outline"}
            className="mb-2"
          >
            {value}
            {unit}
          </Button>
        ))}
      </div>
    </div>
  );
};
export default ValueSelector;
