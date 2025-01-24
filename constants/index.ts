export interface Item {
  id: string;
  name: string;
}

export interface Target {
  id: string;
  name: string;
  correctItemId: string; // ID of the correct item for this target
}

export const items: Item[] = [
  { id: "1", name: "Çamaşır Suyu" },
  { id: "2", name: "Mürekkep" },
  { id: "3", name: "Etanol" },
  { id: "4", name: "Lityum İyon Pil" },
  { id: "5", name: "Sodyum Klorür" },
];

export const targets: Target[] = [
  { id: "t1", name: "Temizlik", correctItemId: "1" },
  { id: "t2", name: "Eğitim", correctItemId: "2" },
  { id: "t3", name: "Sağlık", correctItemId: "3" },
  { id: "t4", name: "Enerji", correctItemId: "4" },
  { id: "t5", name: "Gıda", correctItemId: "5" },
];
