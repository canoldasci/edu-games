import { Item, Level } from "../types";
export const atomicTheories: Item[] = [
  {
    id: "1",
    name: "Demokritos'un Atom Teorisi",
    description:
      "Maddenin 'atomos' adı verilen bölünemez parçacıklardan oluştuğunu öne sürmüştür.",
  },
  {
    id: "2",
    name: "Dalton'un Atom Teorisi",
    description:
      "Atomların bölünemez olduğunu ve sabit oranlarda birleştiğini ileri sürmüştür.",
  },
  {
    id: "3",
    name: "Thomson'un Üzümlü Kek Modeli",
    description:
      "Atomların pozitif yüklü bir madde içinde gömülü elektronlardan oluştuğunu önermiştir.",
  },
  {
    id: "4",
    name: "Rutherford'un Nükleer Modeli",
    description:
      "Çekirdeği keşfetmiş ve atomların çoğunlukla boşluktan oluştuğunu öne sürmüştür.",
  },
  {
    id: "5",
    name: "Bohr'un Gezegen Modeli",
    description:
      "Elektronların çekirdek etrafında sabit enerji seviyelerinde döndüğünü öne sürmüştür.",
  },
  {
    id: "6",
    name: "Kuantum Mekanik Modeli",
    description:
      "Elektronları sabit yörüngeler yerine olasılık bulutlarında var olan parçacıklar olarak tanımlar.",
  },
];
export const orbitalEnergies: Item[] = [
  {
    id: "1",
    name: "1s Orbitali",
    description: "Atomda en düşük enerjiye sahip olan orbital.",
  },
  {
    id: "2",
    name: "2s Orbitali",
    description:
      "1s orbitalinden sonra gelen, biraz daha yüksek enerjiye sahip orbital.",
  },
  {
    id: "3",
    name: "2p Orbitalleri",
    description:
      "2s orbitalinden daha yüksek enerjiye sahip, üç farklı yönelimde bulunan orbitaller.",
  },
  {
    id: "4",
    name: "3s Orbitali",
    description: "2p orbitalinden daha yüksek enerjiye sahip olan s orbitali.",
  },
  {
    id: "5",
    name: "3p Orbitalleri",
    description:
      "3s orbitalinden daha yüksek enerjiye sahip olan p orbitalleri.",
  },
  {
    id: "6",
    name: "4s Orbitali",
    description:
      "Enerji açısından 3p orbitalinden sonra gelir ve dolma sırasına göre önce doldurulur.",
  },
  {
    id: "7",
    name: "3d Orbitalleri",
    description:
      "4s orbitalinden daha yüksek enerjiye sahip, beş farklı yönelimde bulunan orbitaller.",
  },
  {
    id: "8",
    name: "4p Orbitalleri",
    description:
      "3d orbitalinden daha yüksek enerjiye sahip olan p orbitalleri.",
  },
];

export const atomicRadiusIyon: Level[] = [
  {
    level: 1,
    timeLimit: 10,
    orderingType: "atomRadius",
    items: [
      { id: "1", name: "Berilyum - 4Be" },
      { id: "2", name: "Magnezyum - 12Mg" },
      { id: "3", name: "Kalsiyum - 20Ca" },
    ],
    targets: [
      { id: "t1", correctItemId: "1" },
      { id: "t2", correctItemId: "2" },
      { id: "t3", correctItemId: "3" },
    ],
  },
  {
    level: 2,
    timeLimit: 10,
    orderingType: "iyonizationEnergy",
    items: [
      { id: "3", name: "Berilyum - 4Be" },
      { id: "2", name: "Magnezyum - 12Mg" },
      { id: "1", name: "Kalsiyum - 20Ca" },
    ],
    targets: [
      { id: "t3", correctItemId: "3" },
      { id: "t2", correctItemId: "2" },
      { id: "t1", correctItemId: "1" },
    ],
  },
  {
    level: 3,
    timeLimit: 15,
    orderingType: "atomRadius",
    items: [
      { id: "1", name: "Silisyum - 14Si" },
      { id: "2", name: "Kükürt - 16S" },
      { id: "3", name: "Karbon - 6C" },
      { id: "4", name: "Oksijen - 8O" },
    ],
    targets: [
      { id: "t1", correctItemId: "1" },
      { id: "t2", correctItemId: "2" },
      { id: "t3", correctItemId: "3" },
      { id: "t4", correctItemId: "4" },
    ],
  },
  {
    level: 4,
    timeLimit: 15,
    orderingType: "iyonizationEnergy",
    items: [
      { id: "4", name: "Oksijen - 8O" },
      { id: "3", name: "Karbon - 6C" },
      { id: "2", name: "Kükürt - 16S" },
      { id: "1", name: "Silisyum - 14Si" },
    ],
    targets: [
      { id: "t4", correctItemId: "4" },
      { id: "t3", correctItemId: "3" },
      { id: "t2", correctItemId: "2" },
      { id: "t1", correctItemId: "1" },
    ],
  },
  {
    level: 5,
    timeLimit: 20,
    orderingType: "atomRadius",
    items: [
      { id: "1", name: "Potasyum - 19K" },
      { id: "2", name: "Sodyum - 11Na" },
      { id: "3", name: "Brom - 35Br" },
      { id: "4", name: "Fosfor - 15P" },
    ],
    targets: [
      { id: "t1", correctItemId: "1" },
      { id: "t2", correctItemId: "2" },
      { id: "t3", correctItemId: "3" },
      { id: "t4", correctItemId: "4" },
    ],
  },
  {
    level: 6,
    timeLimit: 20,
    orderingType: "iyonizationEnergy",
    items: [
      { id: "4", name: "Fosfor - 15P" },
      { id: "3", name: "Brom - 35Br" },
      { id: "2", name: "Sodyum - 11Na" },
      { id: "1", name: "Potasyum - 19K" },
    ],
    targets: [
      { id: "t4", correctItemId: "4" },
      { id: "t3", correctItemId: "3" },
      { id: "t2", correctItemId: "2" },
      { id: "t1", correctItemId: "1" },
    ],
  },
];
