import { Item, Level } from "../types";
export const atomicTheories: Level[] = [
  {
    level: 1,
    timeLimit: 10,
    orderingType: "atomicTheories",
    items: [
      { id: "1", name: "Demokritos'un Atom Teorisi" },
      { id: "2", name: "Dalton'un Atom Teorisi" },
      { id: "3", name: "Thomson'un Üzümlü Kek Modeli" },
      { id: "4", name: "Rutherford'un Nükleer Modeli" },
      { id: "5", name: "Bohr'un Gezegen Modeli" },
      { id: "6", name: "Kuantum Mekanik Modeli" },
    ],
    targets: [
      { id: "t1", correctItemId: "1" },
      { id: "t2", correctItemId: "2" },
      { id: "t3", correctItemId: "3" },
      { id: "t4", correctItemId: "4" },
      { id: "t5", correctItemId: "5" },
      { id: "t6", correctItemId: "6" },
    ],
  },
];

export const orbitalEnergies: Level[] = [
  {
    level: 1, // Seviye numarası
    timeLimit: 15, // Süre sınırı (saniye cinsinden)
    orderingType: "orbitalEnergyLevels", // Sıralama türü
    items: [
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
        description:
          "2p orbitalinden daha yüksek enerjiye sahip olan s orbitali.",
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
    ],
    targets: [
      { id: "t1", correctItemId: "1" }, // 1s Orbitali
      { id: "t2", correctItemId: "2" }, // 2s Orbitali
      { id: "t3", correctItemId: "3" }, // 2p Orbitalleri
      { id: "t4", correctItemId: "4" }, // 3s Orbitali
      { id: "t5", correctItemId: "5" }, // 3p Orbitalleri
      { id: "t6", correctItemId: "6" }, // 4s Orbitali
      { id: "t7", correctItemId: "7" }, // 3d Orbitalleri
      { id: "t8", correctItemId: "8" }, // 4p Orbitalleri
    ],
  },
];

export const atomicRadiusIyon: Level[] = [
  {
    level: 1,
    timeLimit: 15,
    orderingType: "atomRadius",
    items: [
      { id: "1", name: "Berilyum - ₄Be" },
      { id: "2", name: "Magnezyum - ₁₂Mg" },
      { id: "3", name: "Kalsiyum - ₂₀Ca" },
    ],
    targets: [
      { id: "t1", correctItemId: "1" },
      { id: "t2", correctItemId: "2" },
      { id: "t3", correctItemId: "3" },
    ],
  },
  {
    level: 2,
    timeLimit: 15,
    orderingType: "iyonizationEnergy",
    items: [
      { id: "3", name: "Berilyum - ₄Be" },
      { id: "2", name: "Magnezyum - ₁₂Mg" },
      { id: "1", name: "Kalsiyum - ₂₀Ca" },
    ],
    targets: [
      { id: "t3", correctItemId: "3" },
      { id: "t2", correctItemId: "2" },
      { id: "t1", correctItemId: "1" },
    ],
  },
  {
    level: 3,
    timeLimit: 20,
    orderingType: "atomRadius",
    items: [
      { id: "1", name: "Silisyum - ₁₄Si" },
      { id: "2", name: "Kükürt - ₁₆S" },
      { id: "3", name: "Karbon - ₆C" },
      { id: "4", name: "Oksijen - ₈O" },
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
    timeLimit: 20,
    orderingType: "iyonizationEnergy",
    items: [
      { id: "4", name: "Oksijen - ₈O" },
      { id: "3", name: "Karbon - ₆C" },
      { id: "2", name: "Kükürt - ₁₆S" },
      { id: "1", name: "Silisyum - ₁₄Si" },
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
    timeLimit: 30,
    orderingType: "atomRadius",
    items: [
      { id: "1", name: "Potasyum - ₁₉K" },
      { id: "2", name: "Sodyum - ₁₁Na" },
      { id: "3", name: "Brom - ₃₅Br" },
      { id: "4", name: "Fosfor - ₁₅P" },
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
    timeLimit: 30,
    orderingType: "iyonizationEnergy",
    items: [
      { id: "4", name: "Fosfor - ₁₅P" },
      { id: "3", name: "Brom - ₃₅Br" },
      { id: "2", name: "Sodyum - ₁₁Na" },
      { id: "1", name: "Potasyum - ₁₉K" },
    ],
    targets: [
      { id: "t4", correctItemId: "4" },
      { id: "t3", correctItemId: "3" },
      { id: "t2", correctItemId: "2" },
      { id: "t1", correctItemId: "1" },
    ],
  },
];

export const electronegativity: Level[] = [
  {
    level: 1,
    timeLimit: 10,
    orderingType: "electronegativity",
    items: [
      { id: "1", name: "Flor - ₉F" }, // Elektronegatiflik: 3.98
      { id: "2", name: "Oksijen - ₈O" }, // Elektronegatiflik: 3.44
      { id: "3", name: "Azot - ₇N" }, // Elektronegatiflik: 3.04
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
    orderingType: "electronegativity",
    items: [
      { id: "1", name: "Klor - ₁₇Cl" }, // Elektronegatiflik: 3.16
      { id: "2", name: "Kükürt - ₁₆S" }, // Elektronegatiflik: 2.58
      { id: "3", name: "Fosfor - ₁₅P" }, // Elektronegatiflik: 2.19
    ],
    targets: [
      { id: "t1", correctItemId: "1" },
      { id: "t2", correctItemId: "2" },
      { id: "t3", correctItemId: "3" },
    ],
  },
  {
    level: 3,
    timeLimit: 15,
    orderingType: "electronegativity",
    items: [
      { id: "1", name: "Flor - ₉F" }, // Elektronegatiflik: 3.98
      { id: "2", name: "Klor - ₁₇Cl" }, // Elektronegatiflik: 3.16
      { id: "3", name: "Brom - ₃₅Br" }, // Elektronegatiflik: 2.96
      { id: "4", name: "İyot - ₅₃I" }, // Elektronegatiflik: 2.66
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
    orderingType: "electronegativity",
    items: [
      { id: "1", name: "Oksijen - ₈O" }, // Elektronegatiflik: 3.44
      { id: "2", name: "Azot - ₇N" }, // Elektronegatiflik: 3.04
      { id: "3", name: "Kükürt - ₁₆S" }, // Elektronegatiflik: 2.58
      { id: "4", name: "Fosfor - ₁₅P" }, // Elektronegatiflik: 2.19
    ],
    targets: [
      { id: "t1", correctItemId: "1" },
      { id: "t2", correctItemId: "2" },
      { id: "t3", correctItemId: "3" },
      { id: "t4", correctItemId: "4" },
    ],
  },
  {
    level: 5,
    timeLimit: 20,
    orderingType: "electronegativity",
    items: [
      { id: "1", name: "Flor - ₉F" }, // Elektronegatiflik: 3.98
      { id: "2", name: "Klor - ₁₇Cl" }, // Elektronegatiflik: 3.16
      { id: "3", name: "Brom - ₃₅Br" }, // Elektronegatiflik: 2.96
      { id: "4", name: "İyot - ₅₃I" }, // Elektronegatiflik: 2.66
      { id: "5", name: "Hidrojen - ₁H" }, // Elektronegatiflik: 2.20
    ],
    targets: [
      { id: "t1", correctItemId: "1" },
      { id: "t2", correctItemId: "2" },
      { id: "t3", correctItemId: "3" },
      { id: "t4", correctItemId: "4" },
      { id: "t5", correctItemId: "5" },
    ],
  },
];
