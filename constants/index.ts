// ../../constants/index.ts
import { Level, Element } from "../types/index";

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

export const elements: Element[] = [
  {
    atomicNumber: 1,
    symbol: "H",
    name: "Hydrogen",
    category: "Nonmetal",
    atomicMass: "1.008",
    electronConfiguration: "1s¹",
    discoveredYear: "1766",
    group: 1,
    period: 1,
  },
  {
    atomicNumber: 2,
    symbol: "He",
    name: "Helium",
    category: "Noble Gas",
    atomicMass: "4.0026",
    electronConfiguration: "1s²",
    discoveredYear: "1868",
    group: 18,
    period: 1,
  },
  {
    atomicNumber: 3,
    symbol: "Li",
    name: "Lithium",
    category: "Alkali Metal",
    atomicMass: "6.94",
    electronConfiguration: "[He] 2s¹",
    discoveredYear: "1817",
    group: 1,
    period: 2,
  },
  {
    atomicNumber: 4,
    symbol: "Be",
    name: "Beryllium",
    category: "Alkaline Earth Metal",
    atomicMass: "9.0122",
    electronConfiguration: "[He] 2s²",
    discoveredYear: "1798",
    group: 2,
    period: 2,
  },
  {
    atomicNumber: 5,
    symbol: "B",
    name: "Boron",
    category: "Metalloid",
    atomicMass: "10.81",
    electronConfiguration: "[He] 2s² 2p¹",
    discoveredYear: "1808",
    group: 13,
    period: 2,
  },
  {
    atomicNumber: 6,
    symbol: "C",
    name: "Carbon",
    category: "Nonmetal",
    atomicMass: "12.011",
    electronConfiguration: "[He] 2s² 2p²",
    discoveredYear: "Ancient",
    group: 14,
    period: 2,
  },
  {
    atomicNumber: 7,
    symbol: "N",
    name: "Nitrogen",
    category: "Nonmetal",
    atomicMass: "14.007",
    electronConfiguration: "[He] 2s² 2p³",
    discoveredYear: "1772",
    group: 15,
    period: 2,
  },
  {
    atomicNumber: 8,
    symbol: "O",
    name: "Oxygen",
    category: "Nonmetal",
    atomicMass: "15.999",
    electronConfiguration: "[He] 2s² 2p⁴",
    discoveredYear: "1774",
    group: 16,
    period: 2,
  },
  {
    atomicNumber: 9,
    symbol: "F",
    name: "Fluorine",
    category: "Halogen",
    atomicMass: "18.998",
    electronConfiguration: "[He] 2s² 2p⁵",
    discoveredYear: "1886",
    group: 17,
    period: 2,
  },
  {
    atomicNumber: 10,
    symbol: "Ne",
    name: "Neon",
    category: "Noble Gas",
    atomicMass: "20.180",
    electronConfiguration: "[He] 2s² 2p⁶",
    discoveredYear: "1898",
    group: 18,
    period: 2,
  },
  {
    atomicNumber: 11,
    symbol: "Na",
    name: "Sodium",
    category: "Alkali Metal",
    atomicMass: "22.990",
    electronConfiguration: "[Ne] 3s¹",
    discoveredYear: "1807",
    group: 1,
    period: 3,
  },
  {
    atomicNumber: 12,
    symbol: "Mg",
    name: "Magnesium",
    category: "Alkaline Earth Metal",
    atomicMass: "24.305",
    electronConfiguration: "[Ne] 3s²",
    discoveredYear: "1755",
    group: 2,
    period: 3,
  },
  {
    atomicNumber: 13,
    symbol: "Al",
    name: "Aluminum",
    category: "Post-transition Metal",
    atomicMass: "26.982",
    electronConfiguration: "[Ne] 3s² 3p¹",
    discoveredYear: "1825",
    group: 13,
    period: 3,
  },
  {
    atomicNumber: 14,
    symbol: "Si",
    name: "Silicon",
    category: "Metalloid",
    atomicMass: "28.085",
    electronConfiguration: "[Ne] 3s² 3p²",
    discoveredYear: "1824",
    group: 14,
    period: 3,
  },
  {
    atomicNumber: 15,
    symbol: "P",
    name: "Phosphorus",
    category: "Nonmetal",
    atomicMass: "30.974",
    electronConfiguration: "[Ne] 3s² 3p³",
    discoveredYear: "1669",
    group: 15,
    period: 3,
  },
  {
    atomicNumber: 16,
    symbol: "S",
    name: "Sulfur",
    category: "Nonmetal",
    atomicMass: "32.07",
    electronConfiguration: "[Ne] 3s² 3p⁴",
    discoveredYear: "Ancient",
    group: 16,
    period: 3,
  },
  {
    atomicNumber: 17,
    symbol: "Cl",
    name: "Chlorine",
    category: "Halogen",
    atomicMass: "35.45",
    electronConfiguration: "[Ne] 3s² 3p⁵",
    discoveredYear: "1774",
    group: 17,
    period: 3,
  },
  {
    atomicNumber: 18,
    symbol: "Ar",
    name: "Argon",
    category: "Noble Gas",
    atomicMass: "39.948",
    electronConfiguration: "[Ne] 3s² 3p⁶",
    discoveredYear: "1894",
    group: 18,
    period: 3,
  },
  {
    atomicNumber: 19,
    symbol: "K",
    name: "Potassium",
    category: "Alkali Metal",
    atomicMass: "39.098",
    electronConfiguration: "[Ar] 4s¹",
    discoveredYear: "1807",
    group: 1,
    period: 4,
  },
  {
    atomicNumber: 20,
    symbol: "Ca",
    name: "Calcium",
    category: "Alkaline Earth Metal",
    atomicMass: "40.078",
    electronConfiguration: "[Ar] 4s²",
    discoveredYear: "1808",
    group: 2,
    period: 4,
  },
  {
    atomicNumber: 21,
    symbol: "Sc",
    name: "Scandium",
    category: "Transition Metal",
    atomicMass: "44.956",
    electronConfiguration: "[Ar] 3d¹ 4s²",
    discoveredYear: "1879",
    group: 3,
    period: 4,
  },
  {
    atomicNumber: 22,
    symbol: "Ti",
    name: "Titanium",
    category: "Transition Metal",
    atomicMass: "47.867",
    electronConfiguration: "[Ar] 3d² 4s²",
    discoveredYear: "1791",
    group: 4,
    period: 4,
  },
  {
    atomicNumber: 23,
    symbol: "V",
    name: "Vanadium",
    category: "Transition Metal",
    atomicMass: "50.942",
    electronConfiguration: "[Ar] 3d³ 4s²",
    discoveredYear: "1830",
    group: 5,
    period: 4,
  },
  {
    atomicNumber: 24,
    symbol: "Cr",
    name: "Chromium",
    category: "Transition Metal",
    atomicMass: "52.0",
    electronConfiguration: "[Ar] 3d⁵ 4s¹",
    discoveredYear: "1797",
    group: 6,
    period: 4,
  },
  {
    atomicNumber: 25,
    symbol: "Mn",
    name: "Manganese",
    category: "Transition Metal",
    atomicMass: "54.938",
    electronConfiguration: "[Ar] 3d⁵ 4s²",
    discoveredYear: "1774",
    group: 7,
    period: 4,
  },
  {
    atomicNumber: 26,
    symbol: "Fe",
    name: "Iron",
    category: "Transition Metal",
    atomicMass: "55.845",
    electronConfiguration: "[Ar] 3d⁶ 4s²",
    discoveredYear: "Ancient",
    group: 8,
    period: 4,
  },
  {
    atomicNumber: 27,
    symbol: "Co",
    name: "Cobalt",
    category: "Transition Metal",
    atomicMass: "58.933",
    electronConfiguration: "[Ar] 3d⁷ 4s²",
    discoveredYear: "1735",
    group: 9,
    period: 4,
  },
  {
    atomicNumber: 28,
    symbol: "Ni",
    name: "Nickel",
    category: "Transition Metal",
    atomicMass: "58.693",
    electronConfiguration: "[Ar] 3d⁸ 4s²",
    discoveredYear: "1751",
    group: 10,
    period: 4,
  },
  {
    atomicNumber: 29,
    symbol: "Cu",
    name: "Copper",
    category: "Transition Metal",
    atomicMass: "63.546",
    electronConfiguration: "[Ar] 3d¹⁰ 4s¹",
    discoveredYear: "Ancient",
    group: 11,
    period: 4,
  },
  {
    atomicNumber: 30,
    symbol: "Zn",
    name: "Zinc",
    category: "Transition Metal",
    atomicMass: "65.38",
    electronConfiguration: "[Ar] 3d¹⁰ 4s²",
    discoveredYear: "1746",
    group: 12,
    period: 4,
  },
  {
    atomicNumber: 31,
    symbol: "Ga",
    name: "Gallium",
    category: "Post-transition Metal",
    atomicMass: "69.72",
    electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p¹",
    discoveredYear: "1875",
    group: 13,
    period: 4,
  },
  {
    atomicNumber: 32,
    symbol: "Ge",
    name: "Germanium",
    category: "Metalloid",
    atomicMass: "72.63",
    electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p²",
    discoveredYear: "1886",
    group: 14,
    period: 4,
  },
  {
    atomicNumber: 33,
    symbol: "As",
    name: "Arsenic",
    category: "Metalloid",
    atomicMass: "74.922",
    electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p³",
    discoveredYear: "1250 BC",
    group: 15,
    period: 4,
  },
  {
    atomicNumber: 34,
    symbol: "Se",
    name: "Selenium",
    category: "Nonmetal",
    atomicMass: "78.971",
    electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁴",
    discoveredYear: "1817",
    group: 16,
    period: 4,
  },
  {
    atomicNumber: 35,
    symbol: "Br",
    name: "Bromine",
    category: "Halogen",
    atomicMass: "79.904",
    electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁵",
    discoveredYear: "1826",
    group: 17,
    period: 4,
  },
  {
    atomicNumber: 36,
    symbol: "Kr",
    name: "Krypton",
    category: "Noble Gas",
    atomicMass: "83.798",
    electronConfiguration: "[Ar] 3d¹⁰ 4s² 4p⁶",
    discoveredYear: "1898",
    group: 18,
    period: 4,
  },
  {
    atomicNumber: 37,
    symbol: "Rb",
    name: "Rubidium",
    category: "Alkali Metal",
    atomicMass: "85.468",
    electronConfiguration: "[Kr] 5s¹",
    discoveredYear: "1861",
    group: 1,
    period: 5,
  },
  {
    atomicNumber: 38,
    symbol: "Sr",
    name: "Strontium",
    category: "Alkaline Earth Metal",
    atomicMass: "87.62",
    electronConfiguration: "[Kr] 5s²",
    discoveredYear: "1790",
    group: 2,
    period: 5,
  },
  {
    atomicNumber: 39,
    symbol: "Y",
    name: "Yttrium",
    category: "Transition Metal",
    atomicMass: "88.905",
    electronConfiguration: "[Kr] 4d¹ 5s²",
    discoveredYear: "1794",
    group: 3,
    period: 5,
  },
  {
    atomicNumber: 40,
    symbol: "Zr",
    name: "Zirconium",
    category: "Transition Metal",
    atomicMass: "91.224",
    electronConfiguration: "[Kr] 4d² 5s²",
    discoveredYear: "1789",
    group: 4,
    period: 5,
  },
  {
    atomicNumber: 41,
    symbol: "Nb",
    name: "Niobium",
    category: "Transition Metal",
    atomicMass: "92.906",
    electronConfiguration: "[Kr] 4d⁴ 5s¹",
    discoveredYear: "1801",
    group: 5,
    period: 5,
  },
  {
    atomicNumber: 42,
    symbol: "Mo",
    name: "Molybdenum",
    category: "Transition Metal",
    atomicMass: "95.95",
    electronConfiguration: "[Kr] 4d⁵ 5s¹",
    discoveredYear: "1778",
    group: 6,
    period: 5,
  },
  {
    atomicNumber: 43,
    symbol: "Tc",
    name: "Technetium",
    category: "Transition Metal",
    atomicMass: "98",
    electronConfiguration: "[Kr] 4d⁵ 5s²",
    discoveredYear: "1937",
    group: 7,
    period: 5,
  },
  {
    atomicNumber: 44,
    symbol: "Ru",
    name: "Ruthenium",
    category: "Transition Metal",
    atomicMass: "101.07",
    electronConfiguration: "[Kr] 4d⁷ 5s¹",
    discoveredYear: "1844",
    group: 8,
    period: 5,
  },
  {
    atomicNumber: 45,
    symbol: "Rh",
    name: "Rhodium",
    category: "Transition Metal",
    atomicMass: "102.91",
    electronConfiguration: "[Kr] 4d⁸ 5s¹",
    discoveredYear: "1803",
    group: 9,
    period: 5,
  },
  {
    atomicNumber: 46,
    symbol: "Pd",
    name: "Palladium",
    category: "Transition Metal",
    atomicMass: "106.42",
    electronConfiguration: "[Kr] 4d¹⁰",
    discoveredYear: "1803",
    group: 10,
    period: 5,
  },
  {
    atomicNumber: 47,
    symbol: "Ag",
    name: "Silver",
    category: "Transition Metal",
    atomicMass: "107.87",
    electronConfiguration: "[Kr] 4d¹⁰ 5s¹",
    discoveredYear: "3000 BC",
    group: 11,
    period: 5,
  },
  {
    atomicNumber: 48,
    symbol: "Cd",
    name: "Cadmium",
    category: "Transition Metal",
    atomicMass: "112.41",
    electronConfiguration: "[Kr] 4d¹⁰ 5s²",
    discoveredYear: "1817",
    group: 12,
    period: 5,
  },
  {
    atomicNumber: 49,
    symbol: "In",
    name: "Indium",
    category: "Post-transition Metal",
    atomicMass: "114.82",
    electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p¹",
    discoveredYear: "1863",
    group: 13,
    period: 5,
  },
  {
    atomicNumber: 50,
    symbol: "Sn",
    name: "Tin",
    category: "Post-transition Metal",
    atomicMass: "118.71",
    electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p²",
    discoveredYear: "3000 BC",
    group: 14,
    period: 5,
  },
  {
    atomicNumber: 51,
    symbol: "Sb",
    name: "Antimony",
    category: "Metalloid",
    atomicMass: "121.76",
    electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p³",
    discoveredYear: "1600 BC",
    group: 15,
    period: 5,
  },
  {
    atomicNumber: 52,
    symbol: "I",
    name: "Iodine",
    category: "Halogen",
    atomicMass: "126.90",
    electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁵",
    discoveredYear: "1811",
    group: 17,
    period: 5,
  },
  {
    atomicNumber: 53,
    symbol: "Xe",
    name: "Xenon",
    category: "Noble Gas",
    atomicMass: "131.29",
    electronConfiguration: "[Kr] 4d¹⁰ 5s² 5p⁶",
    discoveredYear: "1898",
    group: 18,
    period: 5,
  },
  {
    atomicNumber: 54,
    symbol: "Cs",
    name: "Cesium",
    category: "Alkali Metal",
    atomicMass: "132.91",
    electronConfiguration: "[Xe] 6s¹",
    discoveredYear: "1860",
    group: 1,
    period: 6,
  },
  {
    atomicNumber: 55,
    symbol: "Ba",
    name: "Barium",
    category: "Alkaline Earth Metal",
    atomicMass: "137.33",
    electronConfiguration: "[Xe] 6s²",
    discoveredYear: "1772",
    group: 2,
    period: 6,
  },
  {
    atomicNumber: 56,
    symbol: "La",
    name: "Lanthanum",
    category: "Lanthanide",
    atomicMass: "138.91",
    electronConfiguration: "[Xe] 5d¹ 6s²",
    discoveredYear: "1839",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 56,
    symbol: "Ba",
    name: "Barium",
    category: "Alkaline Earth Metal",
    atomicMass: "137.33",
    electronConfiguration: "[Xe] 6s²",
    discoveredYear: "1772",
    group: 2,
    period: 6,
  },
  {
    atomicNumber: 57,
    symbol: "La",
    name: "Lanthanum",
    category: "Lanthanide",
    atomicMass: "138.91",
    electronConfiguration: "[Xe] 5d¹ 6s²",
    discoveredYear: "1839",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 58,
    symbol: "Ce",
    name: "Cerium",
    category: "Lanthanide",
    atomicMass: "140.12",
    electronConfiguration: "[Xe] 4f¹ 5d¹ 6s²",
    discoveredYear: "1803",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 59,
    symbol: "Pr",
    name: "Praseodymium",
    category: "Lanthanide",
    atomicMass: "140.91",
    electronConfiguration: "[Xe] 4f³ 6s²",
    discoveredYear: "1885",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 60,
    symbol: "Nd",
    name: "Neodymium",
    category: "Lanthanide",
    atomicMass: "144.24",
    electronConfiguration: "[Xe] 4f⁴ 6s²",
    discoveredYear: "1885",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 61,
    symbol: "Pm",
    name: "Promethium",
    category: "Lanthanide",
    atomicMass: "145",
    electronConfiguration: "[Xe] 4f⁵ 6s²",
    discoveredYear: "1945",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 62,
    symbol: "Sm",
    name: "Samarium",
    category: "Lanthanide",
    atomicMass: "150.36",
    electronConfiguration: "[Xe] 4f⁶ 6s²",
    discoveredYear: "1853",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 63,
    symbol: "Eu",
    name: "Europium",
    category: "Lanthanide",
    atomicMass: "151.98",
    electronConfiguration: "[Xe] 4f⁷ 6s²",
    discoveredYear: "1896",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 64,
    symbol: "Gd",
    name: "Gadolinium",
    category: "Lanthanide",
    atomicMass: "157.25",
    electronConfiguration: "[Xe] 4f⁷ 5d¹ 6s²",
    discoveredYear: "1880",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 65,
    symbol: "Tb",
    name: "Terbium",
    category: "Lanthanide",
    atomicMass: "158.93",
    electronConfiguration: "[Xe] 4f⁸ 6s²",
    discoveredYear: "1843",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 66,
    symbol: "Dy",
    name: "Dysprosium",
    category: "Lanthanide",
    atomicMass: "162.50",
    electronConfiguration: "[Xe] 4f¹⁰ 6s²",
    discoveredYear: "1886",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 67,
    symbol: "Ho",
    name: "Holmium",
    category: "Lanthanide",
    atomicMass: "164.93",
    electronConfiguration: "[Xe] 4f¹¹ 6s²",
    discoveredYear: "1878",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 68,
    symbol: "Er",
    name: "Erbium",
    category: "Lanthanide",
    atomicMass: "167.26",
    electronConfiguration: "[Xe] 4f¹² 6s²",
    discoveredYear: "1843",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 69,
    symbol: "Tm",
    name: "Thulium",
    category: "Lanthanide",
    atomicMass: "168.93",
    electronConfiguration: "[Xe] 4f¹³ 6s²",
    discoveredYear: "1879",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 70,
    symbol: "Yb",
    name: "Ytterbium",
    category: "Lanthanide",
    atomicMass: "173.04",
    electronConfiguration: "[Xe] 4f¹⁴ 6s²",
    discoveredYear: "1878",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 71,
    symbol: "Lu",
    name: "Lutetium",
    category: "Lanthanide",
    atomicMass: "175.00",
    electronConfiguration: "[Xe] 4f¹⁴ 5d¹ 6s²",
    discoveredYear: "1907",
    group: 3,
    period: 6,
  },
  {
    atomicNumber: 72,
    symbol: "Hf",
    name: "Hafnium",
    category: "Transition Metal",
    atomicMass: "178.49",
    electronConfiguration: "[Xe] 4f¹⁴ 5d² 6s²",
    discoveredYear: "1923",
    group: 4,
    period: 6,
  },
  {
    atomicNumber: 73,
    symbol: "Ta",
    name: "Tantalum",
    category: "Transition Metal",
    atomicMass: "180.95",
    electronConfiguration: "[Xe] 4f¹⁴ 5d³ 6s²",
    discoveredYear: "1802",
    group: 5,
    period: 6,
  },
  {
    atomicNumber: 74,
    symbol: "W",
    name: "Tungsten",
    category: "Transition Metal",
    atomicMass: "183.84",
    electronConfiguration: "[Xe] 4f¹⁴ 5d⁴ 6s²",
    discoveredYear: "1783",
    group: 6,
    period: 6,
  },
  {
    atomicNumber: 75,
    symbol: "Re",
    name: "Rhenium",
    category: "Transition Metal",
    atomicMass: "186.21",
    electronConfiguration: "[Xe] 4f¹⁴ 5d⁵ 6s²",
    discoveredYear: "1925",
    group: 7,
    period: 6,
  },
  {
    atomicNumber: 76,
    symbol: "Os",
    name: "Osmium",
    category: "Transition Metal",
    atomicMass: "190.23",
    electronConfiguration: "[Xe] 4f¹⁴ 5d⁶ 6s²",
    discoveredYear: "1803",
    group: 8,
    period: 6,
  },
  {
    atomicNumber: 77,
    symbol: "Ir",
    name: "Iridium",
    category: "Transition Metal",
    atomicMass: "192.22",
    electronConfiguration: "[Xe] 4f¹⁴ 5d⁷ 6s²",
    discoveredYear: "1803",
    group: 9,
    period: 6,
  },
  {
    atomicNumber: 78,
    symbol: "Pt",
    name: "Platinum",
    category: "Transition Metal",
    atomicMass: "195.08",
    electronConfiguration: "[Xe] 4f¹⁴ 5d⁸ 6s²",
    discoveredYear: "1735",
    group: 10,
    period: 6,
  },
  {
    atomicNumber: 79,
    symbol: "Au",
    name: "Gold",
    category: "Transition Metal",
    atomicMass: "196.97",
    electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
    discoveredYear: "3000 BC",
    group: 11,
    period: 6,
  },
  {
    atomicNumber: 80,
    symbol: "Hg",
    name: "Mercury",
    category: "Transition Metal",
    atomicMass: "200.59",
    electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
    discoveredYear: "2000 BC",
    group: 12,
    period: 6,
  },
  {
    atomicNumber: 81,
    symbol: "Tl",
    name: "Thallium",
    category: "Post-transition Metal",
    atomicMass: "204.38",
    electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
    discoveredYear: "1861",
    group: 13,
    period: 6,
  },
  {
    atomicNumber: 82,
    symbol: "Pb",
    name: "Lead",
    category: "Post-transition Metal",
    atomicMass: "207.2",
    electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
    discoveredYear: "4000 BC",
    group: 14,
    period: 6,
  },
  {
    atomicNumber: 83,
    symbol: "Bi",
    name: "Bismuth",
    category: "Post-transition Metal",
    atomicMass: "208.98",
    electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
    discoveredYear: "1753",
    group: 15,
    period: 6,
  },
  {
    atomicNumber: 84,
    symbol: "Po",
    name: "Polonium",
    category: "Metalloid",
    atomicMass: "209",
    electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
    discoveredYear: "1898",
    group: 16,
    period: 6,
  },
  {
    atomicNumber: 85,
    symbol: "At",
    name: "Astatine",
    category: "Halogen",
    atomicMass: "210",
    electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
    discoveredYear: "1940",
    group: 17,
    period: 6,
  },
  {
    atomicNumber: 86,
    symbol: "Rn",
    name: "Radon",
    category: "Noble Gas",
    atomicMass: "222",
    electronConfiguration: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
    discoveredYear: "1899",
    group: 18,
    period: 6,
  },
  {
    atomicNumber: 87,
    symbol: "Fr",
    name: "Francium",
    category: "Alkali Metal",
    atomicMass: "223",
    electronConfiguration: "[Rn] 7s¹",
    discoveredYear: "1939",
    group: 1,
    period: 7,
  },
  {
    atomicNumber: 88,
    symbol: "Ra",
    name: "Radium",
    category: "Alkaline Earth Metal",
    atomicMass: "226",
    electronConfiguration: "[Rn] 7s²",
    discoveredYear: "1898",
    group: 2,
    period: 7,
  },
  {
    atomicNumber: 89,
    symbol: "Ac",
    name: "Actinium",
    category: "Actinide",
    atomicMass: "227",
    electronConfiguration: "[Rn] 6d¹ 7s²",
    discoveredYear: "1899",
    group: 3,
    period: 7,
  },
  {
    atomicNumber: 90,
    symbol: "Th",
    name: "Thorium",
    category: "Actinide",
    atomicMass: "232.04",
    electronConfiguration: "[Rn] 6d² 7s²",
    discoveredYear: "1898",
    group: 3,
    period: 7,
  },
  {
    atomicNumber: 91,
    symbol: "Pa",
    name: "Protactinium",
    category: "Actinide",
    atomicMass: "231.04",
    electronConfiguration: "[Rn] 5f² 6d¹ 7s²",
    discoveredYear: "1899",
    group: 3,
    period: 7,
  },
  {
    atomicNumber: 92,
    symbol: "U",
    name: "Uranium",
    category: "Actinide",
    atomicMass: "238.03",
    electronConfiguration: "[Rn] 5f³ 6d¹ 7s²",
    discoveredYear: "1789",
    group: 3,
    period: 7,
  },
  {
    atomicNumber: 93,
    symbol: "Np",
    name: "Neptunium",
    category: "Actinide",
    atomicMass: "237",
    electronConfiguration: "[Rn] 5f⁴ 6d¹ 7s²",
    discoveredYear: "1940",
    group: 3,
    period: 7,
  },
  {
    atomicNumber: 94,
    symbol: "Pu",
    name: "Plutonium",
    category: "Actinide",
    atomicMass: "244",
    electronConfiguration: "[Rn] 5f⁶ 6d¹ 7s²",
    discoveredYear: "1940",
    group: 3,
    period: 7,
  },
  {
    atomicNumber: 95,
    symbol: "Am",
    name: "Americium",
    category: "Actinide",
    atomicMass: "243",
    electronConfiguration: "[Rn] 5f⁷ 6d¹ 7s²",
    discoveredYear: "1944",
    group: 3,
    period: 7,
  },
  {
    atomicNumber: 96,
    symbol: "Cm",
    name: "Curium",
    category: "Actinide",
    atomicMass: "247",
    electronConfiguration: "[Rn] 5f⁷ 6d² 7s²",
    discoveredYear: "1944",
    group: 3,
    period: 7,
  },
  {
    atomicNumber: 97,
    symbol: "Bk",
    name: "Berkelium",
    category: "Actinide",
    atomicMass: "247",
    electronConfiguration: "[Rn] 5f⁸ 6d² 7s²",
    discoveredYear: "1949",
    group: 3,
    period: 7,
  },
  {
    atomicNumber: 98,
    symbol: "Cf",
    name: "Californium",
    category: "Actinide",
    atomicMass: "251",
    electronConfiguration: "[Rn] 5f⁹ 6d² 7s²",
    discoveredYear: "1950",
    group: 3,
    period: 7,
  },
  {
    atomicNumber: 99,
    symbol: "Es",
    name: "Einsteinium",
    category: "Actinide",
    atomicMass: "252",
    electronConfiguration: "[Rn] 5f¹⁰ 6d² 7s²",
    discoveredYear: "1952",
    group: 3,
    period: 7,
  },
  {
    atomicNumber: 100,
    symbol: "Fm",
    name: "Fermium",
    category: "Actinide",
    atomicMass: "257",
    electronConfiguration: "[Rn] 5f¹¹ 6d² 7s²",
    discoveredYear: "1952",
    group: 3,
    period: 7,
  },
  {
    atomicNumber: 101,
    symbol: "Md",
    name: "Mendelevium",
    category: "Actinide",
    atomicMass: "258",
    electronConfiguration: "[Rn] 5f¹² 6d² 7s²",
    discoveredYear: "1955",
    group: 3,
    period: 7,
  },
  {
    atomicNumber: 102,
    symbol: "No",
    name: "Nobelium",
    category: "Actinide",
    atomicMass: "259",
    electronConfiguration: "[Rn] 5f¹³ 6d² 7s²",
    discoveredYear: "1957",
    group: 3,
    period: 7,
  },
  {
    atomicNumber: 103,
    symbol: "Lr",
    name: "Lawrencium",
    category: "Actinide",
    atomicMass: "262",
    electronConfiguration: "[Rn] 5f¹⁴ 6d¹ 7s²",
    discoveredYear: "1961",
    group: 3,
    period: 7,
  },
  {
    atomicNumber: 104,
    symbol: "Rf",
    name: "Rutherfordium",
    category: "Transition Metal",
    atomicMass: "267",
    electronConfiguration: "[Rn] 5f¹⁴ 6d² 7s²",
    discoveredYear: "1964",
    group: 4,
    period: 7,
  },
  {
    atomicNumber: 105,
    symbol: "Db",
    name: "Dubnium",
    category: "Transition Metal",
    atomicMass: "270",
    electronConfiguration: "[Rn] 5f¹⁴ 6d³ 7s²",
    discoveredYear: "1970",
    group: 5,
    period: 7,
  },
  {
    atomicNumber: 106,
    symbol: "Sg",
    name: "Seaborgium",
    category: "Transition Metal",
    atomicMass: "271",
    electronConfiguration: "[Rn] 5f¹⁴ 6d⁴ 7s²",
    discoveredYear: "1974",
    group: 6,
    period: 7,
  },
  {
    atomicNumber: 107,
    symbol: "Bh",
    name: "Bohrium",
    category: "Transition Metal",
    atomicMass: "270",
    electronConfiguration: "[Rn] 5f¹⁴ 6d⁵ 7s²",
    discoveredYear: "1981",
    group: 7,
    period: 7,
  },
  {
    atomicNumber: 108,
    symbol: "Hs",
    name: "Hassium",
    category: "Transition Metal",
    atomicMass: "277",
    electronConfiguration: "[Rn] 5f¹⁴ 6d⁶ 7s²",
    discoveredYear: "1984",
    group: 8,
    period: 7,
  },
  {
    atomicNumber: 109,
    symbol: "Mt",
    name: "Meitnerium",
    category: "Transition Metal",
    atomicMass: "278",
    electronConfiguration: "[Rn] 5f¹⁴ 6d⁷ 7s²",
    discoveredYear: "1982",
    group: 9,
    period: 7,
  },
  {
    atomicNumber: 110,
    symbol: "Ds",
    name: "Darmstadtium",
    category: "Transition Metal",
    atomicMass: "281",
    electronConfiguration: "[Rn] 5f¹⁴ 6d⁸ 7s²",
    discoveredYear: "1994",
    group: 10,
    period: 7,
  },
  {
    atomicNumber: 111,
    symbol: "Rg",
    name: "Roentgenium",
    category: "Transition Metal",
    atomicMass: "280",
    electronConfiguration: "[Rn] 5f¹⁴ 6d⁹ 7s²",
    discoveredYear: "1994",
    group: 11,
    period: 7,
  },
  {
    atomicNumber: 112,
    symbol: "Cn",
    name: "Copernicium",
    category: "Transition Metal",
    atomicMass: "285",
    electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
    discoveredYear: "1996",
    group: 12,
    period: 7,
  },
  {
    atomicNumber: 113,
    symbol: "Nh",
    name: "Nihonium",
    category: "Post-transition Metal",
    atomicMass: "284",
    electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
    discoveredYear: "2004",
    group: 13,
    period: 7,
  },
  {
    atomicNumber: 114,
    symbol: "Fl",
    name: "Flerovium",
    category: "Post-transition Metal",
    atomicMass: "289",
    electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
    discoveredYear: "1999",
    group: 14,
    period: 7,
  },
  {
    atomicNumber: 115,
    symbol: "Mc",
    name: "Moscovium",
    category: "Post-transition Metal",
    atomicMass: "288",
    electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
    discoveredYear: "2004",
    group: 15,
    period: 7,
  },
  {
    atomicNumber: 116,
    symbol: "Lv",
    name: "Livermorium",
    category: "Post-transition Metal",
    atomicMass: "293",
    electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
    discoveredYear: "2000",
    group: 16,
    period: 7,
  },
  {
    atomicNumber: 117,
    symbol: "Ts",
    name: "Tennessine",
    category: "Halogen",
    atomicMass: "294",
    electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
    discoveredYear: "2010",
    group: 17,
    period: 7,
  },
  {
    atomicNumber: 118,
    symbol: "Og",
    name: "Oganesson",
    category: "Noble Gas",
    atomicMass: "294",
    electronConfiguration: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
    discoveredYear: "2002",
    group: 18,
    period: 7,
  },
];
export const ELEMENTS = [
  {
    number: 1,
    symbol: "H",
    name: "Hydrogen",
    weight: 1.008,
    group: 1,
    period: 1,
  },
  {
    number: 2,
    symbol: "He",
    name: "Helium",
    weight: 4.0026,
    group: 18,
    period: 1,
  },
  {
    number: 3,
    symbol: "Li",
    name: "Lithium",
    weight: 6.94,
    group: 1,
    period: 2,
  },
  {
    number: 4,
    symbol: "Be",
    name: "Beryllium",
    weight: 9.0122,
    group: 2,
    period: 2,
  },
  {
    number: 5,
    symbol: "B",
    name: "Boron",
    weight: 10.81,
    group: 13,
    period: 2,
  },
  {
    number: 6,
    symbol: "C",
    name: "Carbon",
    weight: 12.011,
    group: 14,
    period: 2,
  },
  {
    number: 7,
    symbol: "N",
    name: "Nitrogen",
    weight: 14.007,
    group: 15,
    period: 2,
  },
  {
    number: 8,
    symbol: "O",
    name: "Oxygen",
    weight: 15.999,
    group: 16,
    period: 2,
  },
  {
    number: 9,
    symbol: "F",
    name: "Fluorine",
    weight: 18.998,
    group: 17,
    period: 2,
  },
  {
    number: 10,
    symbol: "Ne",
    name: "Neon",
    weight: 20.18,
    group: 18,
    period: 2,
  },
  {
    number: 11,
    symbol: "Na",
    name: "Sodium",
    weight: 22.99,
    group: 1,
    period: 3,
  },
  {
    number: 12,
    symbol: "Mg",
    name: "Magnesium",
    weight: 24.305,
    group: 2,
    period: 3,
  },
  {
    number: 13,
    symbol: "Al",
    name: "Aluminum",
    weight: 26.982,
    group: 13,
    period: 3,
  },
  {
    number: 14,
    symbol: "Si",
    name: "Silicon",
    weight: 28.085,
    group: 14,
    period: 3,
  },
  {
    number: 15,
    symbol: "P",
    name: "Phosphorus",
    weight: 30.974,
    group: 15,
    period: 3,
  },
  {
    number: 16,
    symbol: "S",
    name: "Sulfur",
    weight: 32.06,
    group: 16,
    period: 3,
  },
  {
    number: 17,
    symbol: "Cl",
    name: "Chlorine",
    weight: 35.45,
    group: 17,
    period: 3,
  },
  {
    number: 18,
    symbol: "Ar",
    name: "Argon",
    weight: 39.948,
    group: 18,
    period: 3,
  },
  {
    number: 19,
    symbol: "K",
    name: "Potassium",
    weight: 39.098,
    group: 1,
    period: 4,
  },
  {
    number: 20,
    symbol: "Ca",
    name: "Calcium",
    weight: 40.078,
    group: 2,
    period: 4,
  },
  {
    number: 21,
    symbol: "Sc",
    name: "Scandium",
    weight: 44.956,
    group: 3,
    period: 4,
  },
  {
    number: 22,
    symbol: "Ti",
    name: "Titanium",
    weight: 47.867,
    group: 4,
    period: 4,
  },
  {
    number: 23,
    symbol: "V",
    name: "Vanadium",
    weight: 50.942,
    group: 5,
    period: 4,
  },
  {
    number: 24,
    symbol: "Cr",
    name: "Chromium",
    weight: 51.996,
    group: 6,
    period: 4,
  },
  {
    number: 25,
    symbol: "Mn",
    name: "Manganese",
    weight: 54.938,
    group: 7,
    period: 4,
  },
  {
    number: 26,
    symbol: "Fe",
    name: "Iron",
    weight: 55.845,
    group: 8,
    period: 4,
  },
  {
    number: 27,
    symbol: "Co",
    name: "Cobalt",
    weight: 58.933,
    group: 9,
    period: 4,
  },
  {
    number: 28,
    symbol: "Ni",
    name: "Nickel",
    weight: 58.693,
    group: 10,
    period: 4,
  },
  {
    number: 29,
    symbol: "Cu",
    name: "Copper",
    weight: 63.546,
    group: 11,
    period: 4,
  },
  {
    number: 30,
    symbol: "Zn",
    name: "Zinc",
    weight: 65.38,
    group: 12,
    period: 4,
  },
  {
    number: 31,
    symbol: "Ga",
    name: "Gallium",
    weight: 69.723,
    group: 13,
    period: 4,
  },
  {
    number: 32,
    symbol: "Ge",
    name: "Germanium",
    weight: 72.63,
    group: 14,
    period: 4,
  },
  {
    number: 33,
    symbol: "As",
    name: "Arsenic",
    weight: 74.922,
    group: 15,
    period: 4,
  },
  {
    number: 34,
    symbol: "Se",
    name: "Selenium",
    weight: 78.96,
    group: 16,
    period: 4,
  },
  {
    number: 35,
    symbol: "Br",
    name: "Bromine",
    weight: 79.904,
    group: 17,
    period: 4,
  },
  {
    number: 36,
    symbol: "Kr",
    name: "Krypton",
    weight: 83.798,
    group: 18,
    period: 4,
  },
  {
    number: 37,
    symbol: "Rb",
    name: "Rubidium",
    weight: 85.468,
    group: 1,
    period: 5,
  },
  {
    number: 38,
    symbol: "Sr",
    name: "Strontium",
    weight: 87.62,
    group: 2,
    period: 5,
  },
  {
    number: 39,
    symbol: "Y",
    name: "Yttrium",
    weight: 88.906,
    group: 3,
    period: 5,
  },
  {
    number: 40,
    symbol: "Zr",
    name: "Zirconium",
    weight: 91.224,
    group: 4,
    period: 5,
  },
  {
    number: 41,
    symbol: "Nb",
    name: "Niobium",
    weight: 92.906,
    group: 5,
    period: 5,
  },
  {
    number: 42,
    symbol: "Mo",
    name: "Molybdenum",
    weight: 95.95,
    group: 6,
    period: 5,
  },
  {
    number: 43,
    symbol: "Tc",
    name: "Technetium",
    weight: 98,
    group: 7,
    period: 5,
  },
  {
    number: 44,
    symbol: "Ru",
    name: "Ruthenium",
    weight: 101.07,
    group: 8,
    period: 5,
  },
  {
    number: 45,
    symbol: "Rh",
    name: "Rhodium",
    weight: 102.91,
    group: 9,
    period: 5,
  },
  {
    number: 46,
    symbol: "Pd",
    name: "Palladium",
    weight: 106.42,
    group: 10,
    period: 5,
  },
  {
    number: 47,
    symbol: "Ag",
    name: "Silver",
    weight: 107.87,
    group: 11,
    period: 5,
  },
  {
    number: 48,
    symbol: "Cd",
    name: "Cadmium",
    weight: 112.41,
    group: 12,
    period: 5,
  },
  {
    number: 49,
    symbol: "In",
    name: "Indium",
    weight: 114.82,
    group: 13,
    period: 5,
  },
  {
    number: 50,
    symbol: "Sn",
    name: "Tin",
    weight: 118.71,
    group: 14,
    period: 5,
  },
  // Devamı için tüm elementleri ekleyebilirsin...
];
