// ../../constants/index.ts
import { Level } from "../types/index";

export const gunlukKimya: Level[] = [
  {
    level: 1,
    timeLimit: 10,
    items: [
      { id: "1", name: "Sabun (Sodyum Stearat)" },
      { id: "2", name: "İyot" },
      { id: "3", name: "Kabartma tozu (Sodyumbikarbonat)" },
      { id: "4", name: "Anti Asit Mide Tableti (Magnezyum Hidroksit)" },
      { id: "5", name: "Lityum" },
    ],
    targets: [
      { id: "t1", name: "Temizlik", correctItemId: "1" },
      { id: "t2", name: "Dezenfektan", correctItemId: "2" },
      { id: "t3", name: "Asit Düzenleyici", correctItemId: "3" },
      { id: "t4", name: "İlaç", correctItemId: "4" },
      { id: "t5", name: "Pil", correctItemId: "5" },
    ],
  },
];
export const piktogram: Level[] = [
  {
    level: 1,
    timeLimit: 50,
    items: [
      { id: "1", image: "yanici.svg", name: "piktogram" },
      { id: "2", image: "patlayici.svg", name: "piktogram" },
      { id: "3", image: "asindirici.svg", name: "piktogram" },
      { id: "4", image: "tehlike.svg", name: "piktogram" },
      { id: "5", image: "zehirli.svg", name: "piktogram" },
    ],
    targets: [
      { id: "t1", name: "Yanıcı/Alevlenir", correctItemId: "1" },
      { id: "t2", name: "Patlayıcı", correctItemId: "2" },
      { id: "t3", name: "Aşındırıcı", correctItemId: "3" },
      { id: "t4", name: "Çevresel Tehlike", correctItemId: "4" },
      { id: "t5", name: "Zehirli", correctItemId: "5" },
    ],
  },
];
export const elektron: Level[] = [
  {
    level: 1,
    timeLimit: 50,
    items: [
      { id: "1", name: "1s² 2s² 2p⁶ 3s¹" },
      { id: "2", name: "1s² 2s² 2p⁶ 3s² 3p²" },
      { id: "3", name: "1s² 2s² 2p⁴" },
      { id: "4", name: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹" },
      { id: "5", name: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹ 4p⁵" },
    ],
    targets: [
      { id: "t1", name: "3. periyot 1A grubu", correctItemId: "1" },
      { id: "t2", name: "3. periyot 4A grubu", correctItemId: "2" },
      { id: "t3", name: "2. periyot 6A grubu", correctItemId: "3" },
      { id: "t4", name: "4. periyot 3B grubu", correctItemId: "4" },
      { id: "t5", name: "4. periyot 7A grubu", correctItemId: "5" },
    ],
  },
];
export const iyon: Level[] = [
  {
    level: 1,
    timeLimit: 50,
    items: [
      { id: "1", name: "(NH₄)⁺" },
      { id: "2", name: "(PO₄)³⁻" },
      { id: "3", name: "(NO₃)⁻" },
      { id: "4", name: "Fe²⁺" },
      { id: "5", name: "Al³⁺" },
    ],
    targets: [
      { id: "t1", name: "Amonyum", correctItemId: "1" },
      { id: "t2", name: "Fosfat", correctItemId: "2" },
      { id: "t3", name: "Nitrat", correctItemId: "3" },
      { id: "t4", name: "Demir(II)", correctItemId: "4" },
      { id: "t5", name: "Alüminyum", correctItemId: "5" },
    ],
  },
];
export const bilesikler: Level[] = [
  {
    level: 1,
    timeLimit: 50,
    items: [
      { id: "1", name: "CaCl₂" },
      { id: "2", name: "Fe₂(SO₄)₃" },
      { id: "3", name: "CO₂" },
      { id: "4", name: "N₂O₃" },
      { id: "5", name: "(NH₄)₂SO₄" },
    ],
    targets: [
      { id: "t1", name: "Kalsiyum Klorür", correctItemId: "1" },
      { id: "t2", name: "Demir(III) Sülfat", correctItemId: "2" },
      { id: "t3", name: "CO₂", correctItemId: "3" },
      { id: "t4", name: "N₂O₃", correctItemId: "4" },
      { id: "t5", name: "Amonyum Sülfat", correctItemId: "5" },
    ],
  },
];
export const atomTeorileri: Level[] = [
  {
    level: 1,
    timeLimit: 50,
    items: [
      { id: "1", name: "Demokritos'un Atom Teorisi" },
      { id: "2", name: "Dalton'un Atom Teorisi" },
      { id: "3", name: "Thomson'un Üzümlü Kek Modeli" },
      { id: "4", name: "Rutherford'un Nükleer Modeli" },
      { id: "5", name: "Bohr'un Gezegen Modeli" },
      { id: "6", name: "Kuantum Mekanik Modeli" },
    ],
    targets: [
      { id: "t1", name: "", correctItemId: "1" },
      { id: "t2", name: "", correctItemId: "2" },
      { id: "t3", name: "", correctItemId: "3" },
      { id: "t4", name: "", correctItemId: "4" },
      { id: "t5", name: "", correctItemId: "5" },
      { id: "t6", name: "", correctItemId: "6" },
    ],
  },
];
export const LIQUIDS = [
  {
    name: "Water (H₂O)",
    initialPressure: 0.03,
    interaction: "Strong Hydrogen Bonds",
    description:
      "Water has strong hydrogen bonds, leading to a low vapor pressure.",
  },
  {
    name: "Ethanol (C₂H₅OH)",
    initialPressure: 0.08,
    interaction: "Moderate Hydrogen Bonds",
    description:
      "Ethanol has weaker hydrogen bonds than water, resulting in a moderate vapor pressure.",
  },
  {
    name: "Ether (C₄H₁₀O)",
    initialPressure: 0.2,
    interaction: "Dipole-Dipole, London Forces",
    description:
      "Ether has weak intermolecular forces, giving it a high vapor pressure.",
  },
  {
    name: "Mercury (Hg)",
    initialPressure: 0.001,
    interaction: "Metallic Bonds",
    description:
      "Mercury has strong metallic bonds, making its vapor pressure extremely low at room temperature.",
  },
];
